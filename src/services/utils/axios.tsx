import Axios from "axios";

const BASE_URL = "http://52.78.149.48:8080";

// Axios 인스턴스 생성 (재사용성 ↑, 코드 간결성 ↑)
export const axios = Axios.create({
  baseURL: BASE_URL,
});

// 요청 인터셉터를 사용하여 매 요청마다 `token`을 설정
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["X-AUTH-TOKEN"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
