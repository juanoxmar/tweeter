FROM node:alpine

WORKDIR '/app'
RUN apk add git

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]