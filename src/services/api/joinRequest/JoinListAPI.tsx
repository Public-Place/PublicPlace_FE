import { axios } from "../../utils/axios";

export const JoinListAPI = async (teamId: number) => {
  try {
    const response = await axios.get(`/api/v1/joinRequest/list/${teamId}`);
    // console.log("가입 요청 리스트 조회 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("가입 요청 리스트 조회 실패", error);
    return error;
  }
};
