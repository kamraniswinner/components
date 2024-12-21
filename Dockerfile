# Stage 1: Build the React app
FROM node:14-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Debugging step (optional)
RUN ls -l /app && ls -l /app/dist

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

