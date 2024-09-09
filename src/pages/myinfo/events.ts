import { useState } from "react";
import { GetUserAPI } from "../../services/api/user/GetUserAPI";
import { UserInfoType } from "./types";

export const useMyInfoEvent = () => {
  const [user, setUser] = useState<UserInfoType>();

  const GetUserInfo = async () => {
    const userInfo = await GetUserAPI();
    setUser(userInfo);
  };

  return { user, GetUserInfo };
};
