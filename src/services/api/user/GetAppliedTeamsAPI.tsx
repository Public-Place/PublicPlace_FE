import { axios } from "../../utils/axios";

export const GetAppliedTeamsAPI = async () => {
  try {
    const response = await axios.get(`/api/v1/user/appliedTeams`, {
      withCredentials: true,
    });
    // console.log("가입 신청 팀 조회 성공 : ", response.data);
    return response.data;
  } catch (error) {
    // console.log("가입 신청 팀 조회 실패 : ", error);
  }
};
