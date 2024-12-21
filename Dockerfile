FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build && ls -l /app/dist

# Copy build output to Nginx folder
RUN if [ -d "/app/dist" ] && [ "$(ls -A /app/dist)" ]; then echo "Build directory exists and is not empty"; else echo "Build directory is empty or missing"; exit 1; fi

# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
