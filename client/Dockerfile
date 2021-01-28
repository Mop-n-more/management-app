FROM node:latest

RUN mkdir -p usr/src/app/client
WORKDIR /usr/src/app/client

COPY package*.json /usr/src/app/client/

RUN npm install -f

