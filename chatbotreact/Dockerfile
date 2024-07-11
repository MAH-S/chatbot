# Stage 1: Build React application
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application to work directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve React application with nginx
FROM nginx:alpine

# Copy build artifacts from stage 1 to nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server (no need for custom nginx.conf)
CMD ["nginx", "-g", "daemon off;"]
