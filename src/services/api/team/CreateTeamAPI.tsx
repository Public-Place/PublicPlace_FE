import { CreateTeamDto } from "../../../dtos/team/CreateTeamDto";
import { axios } from "../../utils/axios";

export const CreateTeamAPI = async (CreateTeamData: CreateTeamDto) => {
  try {
    const response = await axios.post(`api/v1/team/createTeam`, CreateTeamData);
    // console.log("팀 생성 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 생성 실패", error);
  }
};
