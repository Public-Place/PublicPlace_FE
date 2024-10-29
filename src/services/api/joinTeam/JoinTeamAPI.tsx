import { axios } from "../../utils/axios";
import { JoinTeamType } from "./types";

export const JoinTeamAPI = async ({ teamId, introduce }: JoinTeamType) => {
  try {
    const response = await axios.post(
      `/api/v1/joinTeam/${teamId}?joinReason=${introduce}`
    );
    // console.log("팀 가입 요청 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 가입 요청 실패", error);
    return error;
  }
};
