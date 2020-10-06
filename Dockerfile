# Step 1
FROM node:10-alpine as build-step

# Set the same time Zone from Host
RUN ln -sf /usr/share/zoneinfo/Etc/GMT+3  /etc/localtime
RUN echo "America/Argentina/Cordoba" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

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

# Set the same time Zone from Host
RUN ln -sf /usr/share/zoneinfo/Etc/GMT+3  /etc/localtime
RUN echo "America/Argentina/Cordoba" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

EXPOSE 80

COPY --from=build-step /app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx","-g","daemon off;"]