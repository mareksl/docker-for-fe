FROM node:18.8.0-alpine as install
WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn install \
  && yarn cache clean

FROM install AS dev
ENV NODE_ENV=development
EXPOSE 5173
CMD ["yarn", "dev"]

FROM install AS build
ENV NODE_ENV=production
COPY . .
RUN yarn build -- --prod