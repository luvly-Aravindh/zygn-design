# Build Stage
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM php:8.2-apache
RUN a2enmod rewrite

# Create the directory structure
RUN mkdir -p /var/www/html/zygn

# Copy Vite build (index.html will be at /zygn/index.html)
COPY --from=build /app/dist /var/www/html/zygn

# Copy PHP scripts (process form at /zygn/php/index.php)
COPY php /var/www/html/zygn/php

# Copy Thank You page (accessible at /zygn/thank-you/index.html)
COPY thankyou /var/www/html/zygn/thank-you

# Set permissions
RUN chown -R www-data:www-data /var/www/html/zygn

# Copy and configure entrypoint script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Configure Apache to allow overrides (needed for .htaccess if used)
RUN sed -i 's/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
