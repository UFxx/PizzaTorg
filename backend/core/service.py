from django.core.mail import send_mail
from .models import Order
from django.template.loader import render_to_string
HOST = 'https://pirogimsc.ru:8001/admin/core/order/'

def send_new_order_email(order_id):

    order = Order.objects.filter(pk=order_id).first()
    order_point_text = ''
    for order_point in order.order_points.all():
        order_point_text += f'Продукт -{order_point.product} количество - {order_point.amount} стоимость - {order_point.price},\n'
    message = f'''
Новый заказ

Адрес: {order.address}
Номер телефона: {order.phone}
Пункты заказа
{order_point_text}
 
Общая стоимость: {order.price}
Ссылка на заказ {HOST}{order_id}
'''
    send_mail(
        'Новый заказ',
        message,
        'pirogibars@yandex.ru',
        ['pirogibars@yandex.ru'],
        fail_silently=True,
    )