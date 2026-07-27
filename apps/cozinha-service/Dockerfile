FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx nest build cozinha-service

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist/apps/cozinha-service ./dist
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3001
CMD ["node", "dist/main"]