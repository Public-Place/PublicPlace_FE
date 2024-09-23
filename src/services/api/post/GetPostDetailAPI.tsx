import { axios } from "../../utils/axios";
import { PostIdType } from "./types";

export const GetPostDetailAPI = async ({ postId }: PostIdType) => {
  try {
    const response = await axios.get(`/api/v1/post/getPostDetail/${postId}`);
    // console.log("게시글 정보 조회 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("게시글 정보 조회 실패", error);
  }
};
