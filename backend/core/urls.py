from django.urls import path

from .views import *


# urlpatterns = [
#     path('', index, name='index'),
#     path('prod_category/<int:cat_id>/', prod_category, name='prod_category'),
#     path('cart/', cart, name='cart'),
#     path('order_form/', order_form, name='order_form'),
#     path('product/<int:id>/', product, name='product'),
# ]

urlpatterns = [
    path('api-category/', CategoryListView.as_view(), name='api-category'),
    path('api-category_detail/<int:id>/', CategoryRetrieveView.as_view(), name='api-category_detail'),
    path('api-product_cards_list/<int:cat_id>/', ProductCardListView.as_view(), name='api-product_cards_list'),
    path('api-product_detail/<int:id>/', ProductRetrieveView.as_view(), name='api-product_detail'),
    path('api-comment_list/<int:prod_id>', CommentListView.as_view(), name='api-comment_list'),
    path('api-new_order/', OrderCreateView.as_view(), name='api-new_order'),
    path('api-new_comment/', CommentCreateView.as_view(), name='api-new_comment')


]