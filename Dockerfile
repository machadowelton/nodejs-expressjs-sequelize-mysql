FROM node:8
COPY app /usr/src/nodejs-expressjs-sequelize-mysql
COPY config /usr/src/nodejs-expressjs-sequelize-mysql
COPY db /usr/src/nodejs-expressjs-sequelize-mysql
COPY .sequelizerc /usr/src/nodejs-expressjs-sequelize-mysql
COPY index.js /usr/src/nodejs-expressjs-sequelize-mysql
COPY package-lock.json /usr/src/nodejs-expressjs-sequelize-mysql
COPY package.json /usr/src/nodejs-expressjs-sequelize-mysql
WORKDIR /usr/src/nodejs-expressjs-sequelize-mysql
RUN npm install