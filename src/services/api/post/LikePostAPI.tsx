import { axios } from "../../utils/axios";

export const LikePostAPI = async ({ postId }: { postId: number }) => {
  try {
    const response = await axios.post(`/api/v1/post/like/${postId}`);
    // console.log("게시글 좋아요 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("게시글 좋아요 실패", error);
  }
};
