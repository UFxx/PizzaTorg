from django.core.mail import send_mail

HOST = 'http://127.0.0.1:8000/admin/core/order/'

def send_new_order_email(order_id):
    send_mail(
        'Новый заказ',
        f'Ссылка на заказ {HOST}{order_id}',
        'pirogibars@yandex.ru',
        ['pirogibars@yandex.ru'],
        fail_silently=True,
    )