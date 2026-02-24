# ---------- Stage 1: Build ----------
FROM alpine:3.21
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (cached)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# Build optimized production bundle
RUN npm run build

# ---------- Stage 2: Runtime ----------
FROM nginx:1.27-alpine

# Remove default nginx site
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy only build output
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]