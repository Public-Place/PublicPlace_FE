import { PostDto } from "../../../dtos/post/PostDto";
import { axios } from "../../utils/axios";

export const UpdatePostAPI = async ({
  postId,
  UpdatePostData,
}: {
  postId: number;
  UpdatePostData: PostDto;
}) => {
  try {
    const response = await axios.put(
      `/api/v1/post/updatePost/${postId}`,
      UpdatePostData
    );
    // console.log("게시글 수정 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("게시글 수정 실패", error);
    return error;
  }
};
