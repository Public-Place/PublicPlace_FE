import { CreateTeamDto } from "../../../dtos/team/CreateTeamDto";
import { axios } from "../../utils/axios";

export const UpdateTeamAPI = async (
  UpdateTeamData: CreateTeamDto,
  teamId: number
) => {
  try {
    const response = await axios.put(
      `/api/v1/team/updateTeam?teamId=${teamId}`,
      UpdateTeamData
    );
    // console.log("팀 정보 수정 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 정보 수정 실패", error);
    return error;
  }
};
