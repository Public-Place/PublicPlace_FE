import { axios } from "../../utils/axios";

export const TeamAuthCheckAPI = async (teamId: number) => {
  try {
    const response = await axios.post(`/api/v1/team/leader/${teamId}`);
    // console.log("팀 자격 검사 완료", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 자격 검사 실패", error);
    return error;
  }
};
