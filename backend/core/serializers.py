from rest_framework import serializers
from .models import *




class CreateUserSerializer(serializers.ModelSerializer):
    repeat_password = serializers.CharField(max_length=100, write_only=True, )


    class Meta:
        model = User
        fields = ('id',  'first_name', 'last_name', 'email', 'phone', 'address', 'password', 'repeat_password' )
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        password, repeat_password = attrs.get('password', None), attrs.pop('repeat_password', None)

        if password is None or repeat_password is None:
            raise serializers.ValidationError("Вы забыли заполнить пароль")
        if password != repeat_password:
            raise serializers.ValidationError("Пароль не совпадает")

        return attrs

    def create(self, validate_data):
        return User.objects.create_user(**validate_data, username=validate_data.get('email'))


class NestedCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')



class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description')



class CategorySerializer(serializers.ModelSerializer):
    nested_categories = NestedCategorySerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'name', 'main_category', 'nested_categories')

class ProductCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name','image', 'price', 'get_rating')

class IngredientSerializer(serializers.ModelSerializer):
    model = Ingredient
    fields = '__all__'

class CommentUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')


class CommentSerializer(serializers.ModelSerializer):
    user = CommentUserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = ('id', 'user', 'rating', 'product', 'text', 'created')


    def validate(self, attrs):
        rating = attrs.get('rating', 5)
        if  0<= rating <=5:
            return attrs
        raise serializers.ValidationError("Рейтинг не валиден")

    def create(self, validated_data):
        return Comment.objects.create(**validated_data, user=self.context['request'].user)

class ProductDetailSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField('name', read_only=True)
    get_similar_products = ProductCardSerializer(many=True, read_only=True)
    ingredients = IngredientSerializer(many=True, read_only=True)


    class Meta:
        model = Product
        fields = ('id', 'name', 'image', 'price', 'get_rating', 'ingredients', 'size', 'weight', 'description', 'category', 'get_similar_products')



class OrderPointSerializer(serializers.ModelSerializer):
    price = serializers.IntegerField(read_only=True)
    class Meta:
        model = OrderPoint
        fields = ('id', 'product', 'amount', 'price')


class OrderSerializer(serializers.ModelSerializer):
    order_points = OrderPointSerializer( many=True)
    price = serializers.IntegerField(read_only=True)
    user = serializers.SlugRelatedField('email', read_only=True)
    class Meta:
        model = Order
        fields = ('id', 'user', 'phone', 'address', 'order_points', 'price', 'text', 'created')

    def create(self, validated_data):
        order_points = validated_data.pop('order_points')
        if self.context['request'].user.is_authenticated:
            order_user = self.context['request'].user
            phone = validated_data.get('phone', self.context['request'].user.phone)
            address = validated_data.get('address', self.context['request'].user.address)
        else:
            order_user = None
            phone = validated_data.get('phone', '')
            address = validated_data.get('address', '')
        order = Order.objects.create(user=order_user, phone=phone, address=address)


        full_price = 0
        for point in order_points:
            order_point = OrderPoint.objects.create(**point)
            full_price += order_point.price
            order.order_points.add(order_point)
        order.price = full_price
        order.save()
        return order
