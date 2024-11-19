import Axios from "axios";

// 환경 변수에서 BASE_URL 가져오기
const BASE_URL = process.env.REACT_APP_BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL 환경 변수가 설정되지 않았습니다.");
}

// Axios 인스턴스 생성
export const axios = Axios.create({
  baseURL: BASE_URL,
});

// 요청 인터셉터 추가
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["X-AUTH-TOKEN"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
