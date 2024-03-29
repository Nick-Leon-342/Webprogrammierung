FROM node:20.8.0

WORKDIR /webprogrammierung

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]