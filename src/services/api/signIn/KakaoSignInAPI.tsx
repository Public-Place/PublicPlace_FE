import { axios } from "../../utils/axios";
import { KakaoSignInRedirectionAPIType } from "./types";

// step01
export const KakaoSignInAPI = async () => {
  try {
    const response = await axios.get(`/api/v1/kakao/page`);
    // console.log("카카오 URL 불러오기 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("카카오 URL 불러오기 실패", error);
  }
};

// step02
export const KakaoSignInRedirectionAPI = async ({
  code,
}: KakaoSignInRedirectionAPIType) => {
  try {
    const response = await axios.get(`/api/v1/kakao/login?code=${code}`);
    localStorage.setItem("token", response.data.body.token);
    console.log(
      "카카오 로그인 토큰 저장 완료 : ",
      localStorage.getItem("token")
    );
    // console.log("카카오 로그인 성공 (토큰)", response.data.body.token);
    return response.data.body;
  } catch (error) {
    // console.log("카카오 로그인 Redirection 실패", error);
  }
};
