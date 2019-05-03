FROM				node:latest

MAINTAINER 	Zaid Albirawi

RUN					mkdir -p /var/www/react/
COPY				./react/package* /var/www/react/
WORKDIR			/var/www/react
RUN					npm i

ENTRYPOINT 	npm run-script $ENVIRONMENT
