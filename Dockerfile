FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./

RUN npm install

COPY . .
COPY ./.env.prod ./.env

RUN npm run build

ENV NODE_ENV=production
ENV PORT=3100

EXPOSE ${PORT}

CMD ["npm", "run", "start:prod"]