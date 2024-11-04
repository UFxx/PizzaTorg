from itertools import product
from tkinter.messagebox import YESNO

from django.db import models

from sortedm2m.fields import SortedManyToManyField
# Create your models here.



class Category(models.Model):
    name = models.CharField(max_length=250, verbose_name='Категория', unique=True)
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    main_category = models.BooleanField(default=False, verbose_name='Основная категория')
    nested_categories = SortedManyToManyField('Category', blank=True, verbose_name='Дочерние категории' )

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ('name',)

    def __str__(self):

        return self.name

class Ingredient(models.Model):
    name = models.CharField(max_length=255, verbose_name='Ингридиент', unique=True)

    class Meta:
        verbose_name = 'Ингридиент'
        verbose_name_plural = 'Ингридиенты'

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=250, verbose_name='Название', unique=True)
    image = models.ImageField(upload_to='images', verbose_name='Картинка', blank=True, null=True)
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    ingredients = SortedManyToManyField(Ingredient, blank=True, verbose_name='Ингридиенты')
    size = models.PositiveIntegerField(verbose_name='Размер', blank=True, null=True)
    weight = models.PositiveIntegerField(verbose_name='Размер', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, verbose_name='Категория',  blank=True, null=True)
    start_price = models.PositiveIntegerField(verbose_name='Начальная цена')
    discount = models.DecimalField(verbose_name='Скидка', max_digits=5, decimal_places=2,
                                                 blank=True, null=True, default=0)
    price = models.PositiveIntegerField(verbose_name='Цена', blank=True, null=True)

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural= 'Продукты'

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.price = int(self.start_price - (self.start_price * (self.discount / 100 )))
        super(Product, self).save(*args, **kwargs)

    def get_similar_products(self):
        if self.category:
            if self.category.main_category:
                categories = [category.pk for category in self.category.nested_categories.all().prefetch_related('nested_categories')]
                categories.append(self.category.pk)
                return Product.objects.filter(category__in=categories).exclude(id=self.pk)[:10]

            return Product.objects.filter(category=self.category).exclude(id=self.pk)[:10]
        return Product.objects.all().exclude(id=self.pk)[:10]

    def get_rating(self):
        comments = Comment.objects.filter(product=self.pk)
        if len(comments) != 0:
            sum = 0
            count = 0
            for comment in comments:
                sum += comment.rating
                count += 1
            return  round(sum/count, 2)
        return 0



class Comment(models.Model):
    username = models.CharField(max_length=100, verbose_name='Имя пользователя')
    email = models.EmailField(max_length=150, verbose_name='Почта', blank=True, null=True)
    title = models.CharField(max_length=200, verbose_name='Заголовок')
    rating = models.PositiveIntegerField(verbose_name='Рейтинг')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name='Продукт', blank=True, null=True)
    text = models.TextField(verbose_name='Сообщение', blank=True, null=True)
    created = models.DateTimeField(verbose_name='Дата и время создания', auto_now_add=True,)

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'

    def __str__(self):
        return f'Пользователь {self.username} комментарий'


class OrderPoint(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, verbose_name='Продукт', blank=True, null=True)
    amount = models.PositiveIntegerField(verbose_name='Количество', default=1)
    price = models.IntegerField(verbose_name='Цена', blank=True)

    def __str__(self):
        return f"{self.product} x {self.amount}"

    def save(self, *args, **kwargs):
        self.price = int(self.product.price * self.amount)
        super(OrderPoint, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "Пункт заказа"
        verbose_name_plural = "Пункты заказов"

class Order(models.Model):
    status_field = (
        ("Не оплачено", "Не оплачено" ),
        ("Оплачено", "Оплачено"),

    )
    username = models.CharField(max_length=150, verbose_name='Имя пользователя')
    phone = models.CharField(max_length=14, verbose_name='Номер телефона', )
    address = models.CharField(max_length=14, verbose_name='Адрес', )
    order_points = SortedManyToManyField(OrderPoint, verbose_name="Пункт заказа")
    price = models.PositiveIntegerField(blank=True, null=True,  verbose_name='Цена заказа', )
    status = models.CharField(max_length=50, verbose_name='Статус', default='Не оплачено', choices=status_field )
    created = models.DateTimeField(verbose_name='Дата и время создания', auto_now_add=True, )
    text = models.TextField(verbose_name='Комментарий', blank=True, null=True)


    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def __str__(self):
        return str(self.pk)



