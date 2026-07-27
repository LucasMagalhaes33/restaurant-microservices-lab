FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx nest build restaurant-microservices-lab

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist/apps/restaurant-microservices-lab ./dist
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/main"]