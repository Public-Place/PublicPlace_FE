import { axios } from "../../utils/axios";

export const DeleteTeamPostCommentAPI = async (commentId: number) => {
  try {
    const response = await axios.delete(
      `/api/v1/team-board/comment/delete/${commentId}`
    );
    // console.log("팀 게시글 댓글 삭제 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 게시글 댓글 삭제 실패", error);
    return error;
  }
};
