FROM ubuntu:12.04

MAINTAINER yuji

ENV PORT 80

RUN apt-get update

RUN apt-get -y install wget

RUN wget https://nodejs.org/dist/v4.3.1/node-v4.3.1-linux-x64.tar.gz  && tar -zxvf node-v4.3.1-linux-x64.tar.gz

RUN cd node-v4.3.1-linux-x64 && cp -r . /usr/local && rm -fr . && rm ../node-v4.3.1-linux-x64.tar.gz

COPY . /usr/src/app

RUN cd /usr/src/app && npm install && npm run build

WORKDIR /usr/src/app

CMD ["npm", "start"]

EXPOSE 80
