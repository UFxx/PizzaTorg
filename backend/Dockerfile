FROM python:3.11.1

WORKDIR /var/www/app.backend
COPY .  .
RUN apt update
RUN python3 -m pip install -r requirements.txt

RUN python3 manage.py makemigrations
RUN python3 manage.py migrate
RUN python3 manage.py collectstatic --noinput