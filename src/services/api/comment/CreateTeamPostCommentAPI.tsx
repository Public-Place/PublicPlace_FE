import { axios } from "../../utils/axios";
import { TeamPostCommentType } from "./types";

export const CreateTeamPostCommentAPI = async ({
  teamBoardId,
  comment,
}: TeamPostCommentType) => {
  try {
    const response = await axios.post(
      `/api/v1/team-board/comment/create/${teamBoardId}`,
      { content: comment }
    );
    // console.log("팀 게시글 댓글 작성 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 게시글 댓글 작성 실패", error);
  }
};
