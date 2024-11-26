FROM node:lts-alpine

WORKDIR /usr/src/api

COPY package.json ./

RUN npm install --production

COPY . .
COPY ./.env.prod ./.env

RUN npm run build

ENV NODE_ENV=production
ENV PORT=3100

EXPOSE ${PORT}

CMD ["npm", "run", "start:prod"]