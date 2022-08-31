FROM node:18.8.0-alpine as install
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install \
    && yarn cache clean

FROM install AS dev
ENV NODE_ENV=development
CMD ["yarn", "dev"]

FROM install AS build
ENV NODE_ENV=production
COPY . .
RUN yarn build

FROM install AS prod
COPY --from=build /usr/src/app/dist .
CMD ["node", "index.js"]