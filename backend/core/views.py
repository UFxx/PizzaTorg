from unicodedata import category

from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.generics import( ListAPIView,  RetrieveAPIView, CreateAPIView)
from rest_framework.response import Response
from .models import *
from .serializers import *


# def index(request):
#     return render(request, template_name='core/index.html')
#
#
# def prod_category(request, cat_id):
#
#     return render(request, template_name='core/category.html', context={'cat_id': cat_id})
#
# def cart(request):
#     return render(request, template_name='core/cart.html')
#
# def order_form(request):
#     return render(request, template_name='core/order-form.html')
#
# def product(request, id):
#     return render(request, template_name='core/product.html', context={'id': id})

class CategoryListView(ListAPIView):
    queryset = Category.objects.filter(main_category=True).prefetch_related('nested_categories')
    serializer_class = CategorySerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({'categories': serializer.data}, status=status.HTTP_200_OK)



class CategoryRetrieveView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer
    lookup_field = 'id'


class ProductCardListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductCardSerializer

    def get_queryset(self):
        if self.kwargs['cat_id'] == 0:
            return self.queryset.all()
        category = Category.objects.filter(id=self.kwargs['cat_id']).first()
        if category.main_category:
            categories = [category.pk for category in category.nested_categories.all().prefetch_related('nested_categories')]
            categories.append(category.pk)
            return Product.objects.filter(category__in=categories)
        return self.queryset.filter(category=self.kwargs['cat_id'])

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({'products': serializer.data}, status=status.HTTP_200_OK)


class ProductRetrieveView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = 'id'


class CommentListView(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


    def get_queryset(self):
        return self.queryset.filter(category=self.kwargs['prod_id'])


    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({'comments': serializer.data}, status=status.HTTP_200_OK)

class CommentCreateView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class OrderCreateView(CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

