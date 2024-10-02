import { axios } from "../../utils/axios";

export const TeamNameCheckAPI = async (teamName: string) => {
  try {
    const response = await axios.get(`/api/v1/team/checkTeamName/${teamName}`);
    console.log("팀 이름 중복 확인 성공", response.data);
    return response.data;
  } catch (error) {
    console.log("팀 이름 중복 확인 실패", error);
  }
};
