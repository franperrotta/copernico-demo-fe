# Step 1
FROM node:10-alpine as build-step

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

ENV PORT=4200
ENV REACT_APP_BFF=http://localhost:3000

RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine

EXPOSE 80

COPY --from=build-step /app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx","-g","daemon off;"]