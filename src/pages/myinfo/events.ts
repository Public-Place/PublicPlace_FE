import { useState } from "react";
import { GetUserAPI } from "../../services/api/user/GetUserAPI";
import { AppliedTeamsType, JoinedTeamsType, UserInfoType } from "./types";
import { GetAppliedTeamsAPI } from "../../services/api/user/GetAppliedTeamsAPI";
import { GetJoinedTeamsAPI } from "../../services/api/user/GetJoinedTeamsAPI";
import { useNavigate } from "react-router-dom";

export const useMyInfoEvent = () => {
  const navigator = useNavigate();

  // 회원 정보를 담기 위한 상태 관리
  const [user, setUser] = useState<UserInfoType>();

  // 회원 정보 조회 후 상태에 저장
  const GetUserInfo = async () => {
    const userInfo = await GetUserAPI();
    setUser(userInfo);
  };

  // 가입 신청 팀 정보를 담기 위한 상태 관리
  const [appliedTeams, setAppliedTeams] = useState<AppliedTeamsType[]>();

  // 가입 신청 팀 정보 조회 후 상태에 저장
  const GetAppliedTeamsInfo = async () => {
    const appliedTeamsInfo = await GetAppliedTeamsAPI();
    setAppliedTeams(appliedTeamsInfo);
  };

  // 소속 팀 정보를 담기 위한 상태 관리
  const [joinedTeams, setJoinedTeams] = useState<JoinedTeamsType[]>();

  // 소속 팀 정보 조회 후 상태에 저장
  const GetJoinedTeamsInfo = async () => {
    const joinedTeamsInfo = await GetJoinedTeamsAPI();
    setJoinedTeams(joinedTeamsInfo);
  };

  return {
    user,
    GetUserInfo,
    appliedTeams,
    GetAppliedTeamsInfo,
    joinedTeams,
    GetJoinedTeamsInfo,
    navigator,
  };
};
