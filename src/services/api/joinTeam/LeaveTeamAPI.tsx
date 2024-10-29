import { axios } from "../../utils/axios";

export const LeaveTeamAPI = async (teamId: number) => {
  try {
    const response = await axios.delete(`/api/v1/leaveTeam/${teamId}`);
    console.log("팀 탈퇴 성공", response.data);
    return response.data;
  } catch (error) {
    console.log("팀 탈퇴 실패", error);
    return error;
  }
};
