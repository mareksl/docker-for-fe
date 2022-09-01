FROM node:18.8.0-alpine as install
WORKDIR /node
COPY package*.json yarn.lock ./
RUN yarn install \
    && yarn cache clean
ENV PATH /node/node_modules/.bin:$PATH

FROM install AS dev
WORKDIR /node/app
ENV NODE_ENV=development
CMD ["yarn", "dev"]

FROM install AS build
ENV NODE_ENV=production
COPY . .
RUN yarn build

FROM install AS prod
COPY --from=build /node/dist .
CMD ["node", "index.js"]