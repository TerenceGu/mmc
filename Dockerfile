FROM ubuntu:14.04

MAINTAINER yuji

ENV PORT 80

RUN apt-get -y install wget

RUN wget http://npm.taobao.org/mirrors/node/v4.3.1/node-v4.3.1-linux-x64.tar.gz  && tar -zxvf node-v4.3.1-linux-x64.tar.gz

RUN cd node-v4.3.1-linux-x64 && cp -r . /usr/local

COPY . /usr/app

RUN cd /usr/src/app && npm install && npm run build

CMD ["npm", "start"]

EXPOSE 80