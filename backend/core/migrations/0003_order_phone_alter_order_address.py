# Generated by Django 5.0.3 on 2024-11-08 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_remove_order_phone_remove_order_username_order_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='phone',
            field=models.CharField(blank=True, max_length=14, null=True, verbose_name='Номер телефона'),
        ),
        migrations.AlterField(
            model_name='order',
            name='address',
            field=models.CharField(blank=True, max_length=14, null=True, verbose_name='Адрес'),
        ),
    ]
