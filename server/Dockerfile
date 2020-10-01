FROM node:alpine

WORKDIR /app
RUN apk add git

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
RUN yarn prisma generate
CMD ["yarn", "dev"]