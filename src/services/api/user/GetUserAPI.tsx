import { axios } from "../../utils/axios";

export const GetUserAPI = async () => {
  try {
    const response = await axios.get(`/api/v1/user/getUser`, {
      withCredentials: true,
    });
    console.log("회원정보 조회 성공", response.data);
    return response.data;
  } catch (error) {
    console.log("회원정보 조회 실패", error);
  }
};
