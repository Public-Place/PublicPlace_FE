# 1. 빌드 단계: Node.js 이미지를 사용
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Nginx를 사용하여 정적 파일 제공
FROM nginx:alpine

# 3. Nginx 설정 파일 복사 (현재 위치에서 복사)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 4. 빌드된 파일을 Nginx의 기본 제공 디렉토리로 복사
COPY --from=build /app/build /usr/share/nginx/html

# 5. Nginx 기본 포트 노출
EXPOSE 80

# 6. Nginx 실행 명령어 설정
CMD ["nginx", "-g", "daemon off;"]
