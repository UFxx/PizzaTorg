from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

class ProductCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name','image', 'price', 'get_rating')


class ProductDetailSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField('name', read_only=True)
    get_similar_products = ProductCardSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'image', 'price', 'get_rating', 'description', 'category', 'get_similar_products')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class OrderPointSerializer(serializers.ModelSerializer):
    price = serializers.IntegerField(read_only=True)
    class Meta:
        model = OrderPoint
        fields = ('id', 'product', 'amount', 'price')


class OrderSerializer(serializers.ModelSerializer):
    order_points = OrderPointSerializer( many=True)
    price = serializers.IntegerField(read_only=True)

    class Meta:
        model = Order
        fields = ('id', 'username', 'phone', 'address', 'order_points', 'price', 'text', 'created')

    def create(self, validated_data):
        order_points = validated_data.pop('order_points')
        order = Order.objects.create(**validated_data)
        full_price = 0
        for point in order_points:
            order_point = OrderPoint.objects.create(**point)
            full_price += order_point.price
            order.order_points.add(order_point)
        order.price = full_price
        order.save()
        return order
