import { axios } from "../../utils/axios";
import { NickNameCheckAPIType } from "./types";

export const NickNameCheckAPI = async ({ nickname }: NickNameCheckAPIType) => {
  try {
    const response = await axios.get(
      `/api/v1/signCheck/checkNickname/${nickname}`
    );
    // console.log("닉네임 중복 확인 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("닉네임 중복 확인 실패", error);
  }
};
