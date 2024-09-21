import { CreatePostDto } from "../../../dtos/post/CreatePostDto";
import { axios } from "../../utils/axios";

export const CreatePostAPI = async (CreatePostData: CreatePostDto) => {
  try {
    const response = await axios.post("api/v1/post/createPost", CreatePostData);
    // console.log("게시글 작성 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("게시글 작성 실패", error);
  }
};
