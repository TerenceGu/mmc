FROM alpine

MAINTAINER yuji

ENV PORT 80

RUN apk update && apk upgrade

RUN apt-get -y install wget

RUN wget http://npm.taobao.org/mirrors/node/v4.3.1/node-v4.3.1-linux-x64.tar.gz  && tar -zxvf node-v4.3.1-linux-x64.tar.gz

RUN cd node-v4.3.1-linux-x64 && cp -r . /usr/local

COPY . /usr/src/app

RUN cd /usr/src/app && npm install && npm run build

WORKDIR /usr/src/app

CMD ["npm", "start"]

EXPOSE 80
