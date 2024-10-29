import { axios } from "../../utils/axios";

export const JoinRejectAPI = async (requestId: number) => {
  try {
    const response = await axios.post(
      `/api/v1/joinRequest/${requestId}/reject`
    );
    // console.log("팀 가입 요청 거절 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 가입 요청 거절 실패", error);
    return error;
  }
};
