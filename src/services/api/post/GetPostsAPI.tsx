import { axios } from "../../utils/axios";
import { GetPostsAPIType } from "./types";

export const GetPostsAPI = async ({
  category,
  sortBy,
  pageNum,
}: GetPostsAPIType) => {
  try {
    const response = await axios.get(
      `/api/v1/post/getPostsByCategory?category=${category}&page=${pageNum}&sortBy=${sortBy}`
    );
    // console.log("게시판 조회 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("게시판 조회 실패", error);
  }
};
