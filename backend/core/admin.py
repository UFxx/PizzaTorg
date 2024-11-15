from django.contrib import admin
from .models import *
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name',  'email', 'phone', 'address')
    search_fields = ('phone', 'email')

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category',  'start_price', 'discount', 'price', 'description')
    list_display_links = ('id', 'name',)
    search_fields = ('name', 'description')
    list_filter = ('category', 'discount')

class IngredientAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'user',  'rating', 'product', 'text', 'created')

class OrderPointAdmin(admin.ModelAdmin):
    list_display = ('id', 'product', 'amount', 'price')
    list_display_links = ('id', 'product', )
    list_filter = ('amount', )
    search_fields = ('product__name',)


class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'address',  'get_order_points',  'status', 'price', 'created' )
    list_display_links = ('id', )
    search_fields = ('id', 'user__username', 'user__phone', 'address')
    list_filter = ( 'status', 'created')


    @admin.display(description='Пункты заказа')
    def get_order_points(self, obj):
        return [order_point.product.name for order_point in obj.order_points.all()]


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(OrderPoint, OrderPointAdmin)
admin.site.register(Ingredient, IngredientAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(User, UserAdmin)