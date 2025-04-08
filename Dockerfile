# Stage 1: Build ứng dụng
FROM node:18-alpine AS builder

# Set thư mục làm việc
WORKDIR /app

# Copy file package
COPY package.json package-lock.json ./

# Cài đặt dependencies để build
RUN npm ci

# Copy toàn bộ mã nguồn vào
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Stage 2: Tạo image nhỏ cho production
FROM node:18-alpine AS runner

WORKDIR /app

# Chỉ copy các file cần thiết để chạy production
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# EXPOSE có thể hardcode hoặc dùng ARG + ENV nếu cần build linh hoạt
EXPOSE ${PORT}

# Bắt đầu chạy ứng dụng
CMD ["npm", "run", "start"]
