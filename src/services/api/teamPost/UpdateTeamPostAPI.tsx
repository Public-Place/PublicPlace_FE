import { axios } from "../../utils/axios";
import { UpdateTeamPostType } from "./types";

export const UpdateTeamPostAPI = async ({
  teamBoardId,
  UpdateTeamPost,
}: UpdateTeamPostType) => {
  try {
    const response = await axios.put(
      `/api/v1/team-board/update/${teamBoardId}`,
      UpdateTeamPost
    );
    // console.log("팀 게시글 수정 완료", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 게시글 수정 실패", error);
    return error;
  }
};
