import { axios } from "../../utils/axios";

export const JoinDetailAPI = async (requestId: number) => {
  try {
    const response = await axios.get(`/api/v1/joinRequest/detail/${requestId}`);
    // console.log("가입 요청자 정보 조회 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("가입 요청자 정보 조회 실패", error);
    return error;
  }
};
