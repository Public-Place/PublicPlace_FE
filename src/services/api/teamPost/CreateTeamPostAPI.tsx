import { axios } from "../../utils/axios";
import { CreateTeamPostType } from "./types";

export const CreateTeamPostAPI = async ({
  teamId,
  CreateTeamPost,
}: CreateTeamPostType) => {
  try {
    const response = await axios.post(
      `/api/v1/team-board/create/${teamId}`,
      CreateTeamPost
    );
    // console.log("팀 게시글 작성 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 게시글 작성 실패", error);
    return error;
  }
};
