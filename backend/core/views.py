from rest_framework.filters import SearchFilter
from rest_framework import status
from rest_framework.generics import (ListAPIView, RetrieveAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import *
from .serializers import *


class UserCreateView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer


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
    filter_backends = (SearchFilter,)
    search_fields = ('name',)

    def get_queryset(self):
        if self.kwargs['cat_id'] == 0:
            return self.queryset.all()
        category = Category.objects.filter(id=self.kwargs['cat_id']).first()
        if category.main_category:
            categories = [category.pk for category in
                          category.nested_categories.all().prefetch_related('nested_categories')]
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
        return self.queryset.filter(product=self.kwargs['prod_id'])

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({'comments': serializer.data}, status=status.HTTP_200_OK)


class CommentCreateView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated,)


class OrderCreateView(CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class UserRetrieveView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = None

    def get_object(self):

        return self.request.user


