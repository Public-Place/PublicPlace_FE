import { axios } from "../../utils/axios";
import { PostIdType } from "./types";

export const DeletePostAPI = async ({ postId }: PostIdType) => {
  try {
    const response = await axios.delete(`/api/v1/post/deletePost/${postId}`);
    // console.log("게시글 삭제 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("게시글 삭제 실패", error);
    return error;
  }
};
