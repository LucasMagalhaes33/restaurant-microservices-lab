FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx nest build pagamento-service

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist/apps/pagamento-service ./dist
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3002
CMD ["node", "dist/main"]