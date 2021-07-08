FROM node:15

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src/server .

COPY .env .

CMD ["npm", "start"]
