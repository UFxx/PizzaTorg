FROM node:20.17

WORKDIR /var/www/app.frontend

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 5137

RUN npm run build

