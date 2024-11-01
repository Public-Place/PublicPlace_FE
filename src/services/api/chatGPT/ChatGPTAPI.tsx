import { axios } from "../../utils/axios";

export const ChatGPTAPI = async (prompt: string) => {
  try {
    const response = await axios.post(`/api/v1/chat/GPT?prompt=${prompt}`);
    // console.log("Chat Bot 응답 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("Chat Bot 응답 실패", error);
    return error;
  }
};
