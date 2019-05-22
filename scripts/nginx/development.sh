envsubst '$WEBAPP_HOST, $WEBAPP_PORT' < /etc/nginx/config-templates/development > /etc/nginx/nginx.conf
/bin/wait-for-it.sh -t 30 $WEBAPP_HOST:$WEBAPP_PORT
nginx -g "daemon off;"
