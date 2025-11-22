# Build Stage
FROM node:22-alpine AS build

WORKDIR /app

# Fix spelling
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Production Stage
FROM node:22-alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

# Fix comma
CMD ["serve", "-s", "dist", "-l", "3000"]
