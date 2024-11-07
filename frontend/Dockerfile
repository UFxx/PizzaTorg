# Use an official Node runtime as a parent image
FROM node:20.17

# Set the working directory to /app
WORKDIR /var/www/app.frontend

# Copy the package.json and package-lock.json to the working directory
COPY ./package.json ./

# Install the dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . .


EXPOSE 5137
# Build the application
RUN npm run build

