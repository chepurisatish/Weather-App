# Step 1: Use Node image to build the app
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Use Nginx to serve the build
FROM nginx:alpine

# Copy the build output to Nginx's html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
