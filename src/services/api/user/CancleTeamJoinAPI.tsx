import { CancleJoinTeamType } from "../../../pages/myinfo/types";
import { axios } from "../../utils/axios";

export const CancleTeamJoinAPI = async ({
  teamId,
  teamName,
}: CancleJoinTeamType) => {
  try {
    const response = await axios.delete(
      `/api/v1/user/deleteTeamJoinRequest?teamId=${teamId}`
    );
    // console.log("팀 가입 신청 취소 성공", response.data);
    alert(`'${teamName}'에게 보낸 가입 신청을 취소하였습니다.`);
    return response.data;
  } catch (error) {
    // console.log("팀 가입 신청 취소 실패", error);
  }
};
