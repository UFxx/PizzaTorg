# Generated by Django 5.0.3 on 2024-11-12 06:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_order_phone_alter_order_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='phone',
            field=models.CharField(default=345, max_length=14, verbose_name='Номер телефона'),
            preserve_default=False,
        ),
    ]