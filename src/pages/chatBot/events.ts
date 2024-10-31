import { useState } from "react";
import { UserInfoType } from "../myinfo/types";
import { GetUserAPI } from "../../services/api/user/GetUserAPI";

export const useChatBotEvent = () => {
  // 회원 정보
  const [userInfo, setUserInfo] = useState<UserInfoType>();

  // 회원 정보 조회
  const handleGetUserInfo = async () => {
    const result = await GetUserAPI();
    setUserInfo(result);
  };

  // 채팅 시작 유무
  const [isStart, setIsStart] = useState<boolean>(false);

  return {
    isStart,
    userInfo,
    handleGetUserInfo,
  };
};
