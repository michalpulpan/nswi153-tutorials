FROM node:latest as dependencies
WORKDIR /usr/src/app
COPY ./tut09/package.json ./

# RUN npm i -g npm
RUN npm install -g npm@8.5.3
RUN npm install --legacy-peer-deps

FROM node:latest as builder
WORKDIR /usr/src/app

COPY tut09 .

COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --from=dependencies /usr/src/app/package.json ./package.json

RUN npm run build 

FROM node:latest as runner
WORKDIR /usr/src/app
# ENV NODE_ENV production

COPY --from=builder /usr/src/app/. .

EXPOSE 3000
CMD ["npm", "start"]