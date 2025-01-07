FROM node:20

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

RUN yarn build
CMD ["yarn", "start"]
