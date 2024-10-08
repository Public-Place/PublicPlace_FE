import { axios } from "../../utils/axios";

export const GetTeamByIdAPI = async (teamId: number) => {
  try {
    const response = await axios.get(`/api/v1/team/getTeam/${teamId}`);
    // console.log("팀 조회 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 조회 실패", error);
  }
};
