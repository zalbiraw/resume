FROM        nginx

MAINTAINER  Zaid Albirawi

COPY        ./scripts/wait-for-it.sh /bin/
COPY        ./scripts/nginx/development.sh /bin/nginx/
COPY        ./scripts/nginx/production.sh /bin/nginx/

RUN         chmod +x /bin/wait-for-it.sh
RUN         chmod +x /bin/nginx/development.sh
RUN         chmod +x /bin/nginx/production.sh

ENTRYPOINT  /bin/nginx/$ENVIRONMENT.sh
