import { axios } from "../../utils/axios";

export const RefreshAPI = async () => {
  try {
    const response = await axios.post(`/api/v1/chat/refresh`);
    // console.log("채팅 기록 새로고침 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("채팅 기록 새로고침 실패", error);
    return error;
  }
};
