FROM node:20.9.0

COPY package*.json ./

WORKDIR /app/server

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "start"]