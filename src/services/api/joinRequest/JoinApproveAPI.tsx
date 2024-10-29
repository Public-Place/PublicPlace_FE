import { axios } from "../../utils/axios";

export const JoinApproveAPI = async (requestId: number) => {
  try {
    const response = await axios.post(
      `/api/v1/joinRequest/${requestId}/approve`
    );
    // console.log("팀 가입 요청 승인 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 가입 요청 승인 실패", error);
    return error;
  }
};
