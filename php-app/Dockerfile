FROM php:8-apache

WORKDIR /var/www/html

EXPOSE 80

RUN chown -R www-data:www-data /var/www
RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN a2enmod rewrite