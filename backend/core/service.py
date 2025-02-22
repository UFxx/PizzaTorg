from django.core.mail import send_mail

HOST = 'https://pirogimsc.ru:8001/admin/core/order/'

def send_new_order_email(order_id):
    send_mail(
        'Новый заказ',
        f'Ссылка на заказ {HOST}{order_id}',
        'pirogibars@yandex.ru',
        ['pirogibars@yandex.ru'],
        fail_silently=True,
    )