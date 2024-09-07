import { axios } from "../../utils/axios";
import { LocalSignInAPIType } from "./types";

export const LocalSignInAPI = async ({
  email,
  password,
}: LocalSignInAPIType) => {
  try {
    const response = await axios.post(
      `/sign-api/sign-in?email=${email}&password=${password}`
    );
    // console.log("일반 로그인 성공", response.data);
    localStorage.setItem("token", response.data.token);
    console.log("일반 로그인 토큰 저장 완료 : ", localStorage.getItem("token"));
    return response.data;
  } catch (error) {
    // console.log("일반 로그인 실패", error);
  }
};
