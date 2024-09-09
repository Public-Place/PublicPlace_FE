import { axios } from "../../utils/axios";

export const GetJoinedTeamsAPI = async () => {
  try {
    const response = await axios.get(`/api/v1/user/joinedTeams`, {
      withCredentials: true,
    });
    // console.log("소속 팀 조회 성공 : ", response.data);
    return response.data;
  } catch (error) {
    // console.log("소속 팀 조회 실패 : ", error);
  }
};
