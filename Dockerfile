FROM node:23-alpine3.20

ENV MONGO_URI=mongodb://host.docker.internal:27017/blog-notes

WORKDIR /nodeApp

EXPOSE 3000

COPY . .

RUN npm install

CMD ["node","app.js"]
 
