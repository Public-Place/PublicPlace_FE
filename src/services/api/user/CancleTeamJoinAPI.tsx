import { CancleJoinTeamType } from "../../../pages/myinfo/types";
import { axios } from "../../utils/axios";

export const CancleTeamJoinAPI = async ({ teamId }: CancleJoinTeamType) => {
  try {
    const response = await axios.delete(
      `/api/v1/user/deleteTeamJoinRequest?teamId=${teamId}`
    );
    // console.log("팀 가입 신청 취소 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 가입 신청 취소 실패", error);
    return error;
  }
};
