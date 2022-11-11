# Build Image
FROM node:lts-alpine as build

WORKDIR /tmp/

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Production Image
FROM node:lts-alpine

WORKDIR /app/

ENV NODE_ENV=production

COPY --from=build tmp/build/ ./build/
COPY --from=build tmp/package*.json ./

RUN npm ci --production --ignore-scripts

CMD [ "node", "build/index.js" ]