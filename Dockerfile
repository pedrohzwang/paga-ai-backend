FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .
COPY ./.env.prod ./.env

ENV NODE_ENV=production
ENV PORT=3100

EXPOSE ${PORT}

CMD ["npm", "run", "start:prod"]