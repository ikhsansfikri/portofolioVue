# Stage 1: Build the React application
FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
# EXPOSE 3000
# CMD ["npx", "serve", "build", "-s", "-l", "8000"]
# Stage 2: Serve the built application with Nginx
FROM nginx:latest AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY /nginx/default.conf /etc/nginx/nginx.conf

# EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]