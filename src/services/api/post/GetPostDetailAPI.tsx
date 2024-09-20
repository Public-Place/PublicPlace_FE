import { axios } from "../../utils/axios";

export const GetPostDetailAPI = async ({ postId }: { postId: number }) => {
  try {
    const response = await axios.get(`/api/v1/post/getPostDetail/${postId}`);
    // console.log("게시글 정보 조회 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("게시글 정보 조회 실패", error);
  }
};
