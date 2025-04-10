
FROM node:23-alpine AS build

WORKDIR /nodeApp

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN rm -rf .git .github README.md *.md tests

FROM node:23-alpine


ENV MONGO_URI=mongodb://host.docker.internal:27017/blog-notes

WORKDIR /nodeApp

COPY --from=build /nodeApp /nodeApp

EXPOSE 3000


CMD ["node", "app.js"]
