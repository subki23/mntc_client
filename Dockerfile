FROM node AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#membuat image docker
FROM httpd:alpine
#masuk dir http
WORKDIR /usr/local/apache2/htdocs
COPY --from=builder /app/dist/** ./
#docker finish