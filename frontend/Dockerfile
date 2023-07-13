FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

#RUN npm config set proxy http://172.17.33.10:3128
#RUN npm config set https-proxy http://172.17.33.10:3128
RUN npm install

COPY . .

VOLUME /usr/src/app

EXPOSE 4200

#CMD ["npm", "start"]


