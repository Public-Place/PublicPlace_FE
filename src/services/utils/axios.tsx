import Axios from "axios";

const BASE_URL = "http://52.78.149.48:8080";

// Axios 인스턴스 생성 (재사용성 ↑, 코드 간결성 ↑)
export const axios = Axios.create({
  baseURL: BASE_URL,
});

// 요청 인터셉터 추가 (Request Interceptor)
axios.interceptors.request.use(
  (config) => {
    // localStorage에서 JWT 토큰을 가져오기
    const token = localStorage.getItem("token");

    // 토큰이 있을 경우 헤더에 추가
    if (token) {
      config.headers["X-AUTH-TOKEN"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
