FROM node:18-alpine

WORKDIR /app

COPY backend/package*.json ./

RUN npm ci

COPY backend/src ./src

EXPOSE 5000

CMD ["npm", "start"]