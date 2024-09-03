import { axios } from "../../utils/axios";

export const KakaoSignInAPI = async () => {
  try {
    const response = await axios.get(`/api/v1/kakao/page`);
    // console.log("카카오 URL 불러오기 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("카카오 URL 불러오기 실패", error);
  }
};
