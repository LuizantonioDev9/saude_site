# Use uma imagem PHP com suporte ao Apache
FROM php:8.0-apache

# Instala as extensões necessárias para MySQL
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copia o código PHP para o diretório do servidor web
COPY backend/ /var/www/html/

# Permite que o Apache leia e sirva o código PHP
RUN chown -R www-data:www-data /var/www/html
