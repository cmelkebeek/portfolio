# Étape 1 : Builder l’application
FROM node:18 AS builder
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /src/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
