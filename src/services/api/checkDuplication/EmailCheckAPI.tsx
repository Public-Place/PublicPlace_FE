import { axios } from "../../utils/axios";
import { EmailCheckAPIType } from "./types";

export const EmailCheckAPI = async ({ email }: EmailCheckAPIType) => {
  try {
    const response = await axios.get(`/api/v1/signCheck/checkEmail/${email}`);
    // console.log("이메일 중복 확인 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("이메일 중복 확인 실패", error);
  }
};
