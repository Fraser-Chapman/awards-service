FROM node:12.7-alpine AS build

WORKDIR usr/src/app

COPY package.json package-lock.json ./

COPY . .

RUN npm run lint

RUN npm run build

#RUN npm run test

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/awards-frontend /usr/share/nginx/html
