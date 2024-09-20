import { newCommentType } from "../../../pages/post/types";
import { axios } from "../../utils/axios";

export const CreatePostCommentAPI = async ({
  newComment,
  postId,
}: newCommentType) => {
  try {
    const response = await axios.post(
      `/api/v1/post/comments?content=${newComment}&postId=${postId}`
    );
    // console.log("게시글 댓글 작성 성공", response.data);
    window.location.reload();
    return response.data;
  } catch (error) {
    // console.log("게시글 댓글 작성 실패", error);
  }
};
