FROM node:18

WORKDIR /usr/src/app

COPY package*.json server.js ./
#RUN npm config set proxy http://172.17.33.10:3128
#RUN npm config set https-proxy http://172.17.33.10:3128

RUN npm install

COPY . .

EXPOSE 8080
VOLUME /usr/src/app

#CMD [ "node", "server.js"]
