FROM node:8
COPY . /usr/src/nodejs-expressjs-sequelize-mysql
WORKDIR /usr/src/nodejs-expressjs-sequelize-mysql
RUN npm install