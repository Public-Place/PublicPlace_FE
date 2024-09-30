import { axios } from "../../utils/axios";

export const GetTeamListAPI = async () => {
  try {
    const response = await axios.get(`api/v1/team/getTeamList`);
    // console.log("전체 팀 조회 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("전체 팀 조회 실패", error);
  }
};
