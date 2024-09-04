import { axios } from "../../utils/axios";
import { TelCheckAPIType } from "./types";

export const TelCheckAPI = async ({ tel }: TelCheckAPIType) => {
  try {
    const response = await axios.get(`/api/v1/signCheck/checkPhoneNum/${tel}`);
    // console.log("전화번호 중복 확인 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("전화번호 중복 확인 실패", error);
  }
};
