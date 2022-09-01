# use node alpine for smaller image
FROM node:18.8.0-alpine as install
# set working directory to parent directory of where our app will be located
# node will look for node_modules in parent directory if none are present in child dir
WORKDIR /node
# copy over necessary files
COPY package*.json yarn.lock ./
# install node modules inside container and clean cache
RUN yarn install \
  && yarn cache clean
# add node_modules to $PATH to be able to run scripts
ENV PATH /node/node_modules/.bin:$PATH

FROM install AS dev
WORKDIR /node/app
ENV NODE_ENV=development
CMD ["yarn", "dev"]

##########

FROM install AS build
ENV NODE_ENV=production
COPY . .
RUN yarn build

FROM nginx:stable-alpine AS prod
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /node/dist .