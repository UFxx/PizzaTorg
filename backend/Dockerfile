FROM python:3.11.1

WORKDIR /var/www/app.backend
COPY .  .
RUN apt update
RUN python -m pip install -r requirements.txt

RUN python manage.py makemigrations
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput