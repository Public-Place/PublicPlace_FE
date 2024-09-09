import { GetUserAPI } from "../../services/api/user/GetUserAPI";

export const useMainEvents = () => {
  // 회원정보 조회 API
  const handleCheckToken = async () => {
    // 로컬 스토리지의 토큰
    const token = localStorage.getItem("token");

    if (token) {
      await GetUserAPI();
    }
  };

  return { handleCheckToken };
};
