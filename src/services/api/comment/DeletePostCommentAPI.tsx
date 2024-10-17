import { axios } from "../../utils/axios";

export const DeletePostCommentAPI = async ({
  commentId,
}: {
  commentId: number;
}) => {
  try {
    const response = await axios.delete(`/api/v1/post/comments/${commentId}`);
    // console.log("게시글 댓글 삭제 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("게시글 댓글 삭제 실패", error);
    return error;
  }
};
