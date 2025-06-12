# Stage 1: Build ứng dụng
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Image production nhỏ gọn
FROM node:18-alpine AS runner

WORKDIR /app

# Copy những thứ cần để chạy
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# EXPOSE port (nếu PORT không có default, dùng 3000 mặc định)
ENV PORT=3000
EXPOSE $PORT

# Dùng entrypoint custom để generate env.js trước khi chạy app
ENTRYPOINT ["/entrypoint.sh"]
