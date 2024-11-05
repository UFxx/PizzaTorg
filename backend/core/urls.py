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
    # Категории (в меню)
    path('api-category/', CategoryListView.as_view(), name='api-category'),
    # О категории (имя, описание)
    path('api-category_detail/<int:id>/', CategoryRetrieveView.as_view(), name='api-category_detail'),
    # Список продуктов (0, чтобы весь список продуктов)
    # http://127.0.0.1:8000/api-product_cards_list/0/?search=a (поиск)
    path('api-product_cards_list/<int:cat_id>/', ProductCardListView.as_view(), name='api-product_cards_list'),
    # О продукте
    path('api-product_detail/<int:id>/', ProductRetrieveView.as_view(), name='api-product_detail'),
    # Комменты о продукте (передавать id продукта)
    path('api-comment_list/<int:prod_id>', CommentListView.as_view(), name='api-comment_list'),
    # Передавать имя пользователя, номер, адрес, order point
    path('api-new_order/', OrderCreateView.as_view(), name='api-new_order'),
    # Комментарии 
    path('api-new_comment/', CommentCreateView.as_view(), name='api-new_comment')
]