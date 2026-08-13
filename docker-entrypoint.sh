#!/bin/sh
set -e

# Replace the FB Pixel ID placeholder with the env variable value
if [ -n "$FB_PIXEL_ID" ]; then
  sed -i "s/__FB_PIXEL_ID__/${FB_PIXEL_ID}/g" /var/www/html/zygn/thank-you/index.html
  sed -i "s/__FB_PIXEL_ID__/${FB_PIXEL_ID}/g" /var/www/html/zygn/index.html
fi

# Start Apache in foreground
exec apache2-foreground
