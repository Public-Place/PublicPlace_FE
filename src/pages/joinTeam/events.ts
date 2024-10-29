import { useState } from "react";
import { GetUserAPI } from "../../services/api/user/GetUserAPI";
import { UserInfoType } from "../myinfo/types";
import { JoinTeamAPI } from "../../services/api/joinTeam/JoinTeamAPI";
import { useNavigate } from "react-router-dom";
import { JoinDetailAPI } from "../../services/api/joinRequest/JoinDetailAPI";
import { JoinUserType } from "../../services/api/joinRequest/types";
import { JoinApproveAPI } from "../../services/api/joinRequest/JoinApproveAPI";
import { JoinRejectAPI } from "../../services/api/joinRequest/JoinRejectAPI";

export const useJoinTeamEvent = () => {
  const navigator = useNavigate();

  // 회원 정보
  const [userInfo, setUserInfo] = useState<UserInfoType>();

  // 회원 정보 조회
  const handleGetUserInfo = async () => {
    const result = await GetUserAPI();
    setUserInfo(result);
  };

  // 자기 소개
  const [introduce, setIntroduce] = useState("");

  // 입력 값 유효성 검사
  const CheckEssentialValues = () => {
    if (!introduce) {
      alert("자기 소개를 입력해주세요.");
      return false;
    }
    return true;
  };

  // '가입하기' 클릭 시
  const handleClickJoinBtn = async (teamId: number) => {
    if (!CheckEssentialValues()) {
      return;
    } else {
      if (window.confirm("가입 양식을 보내시겠습니까?")) {
        // 팀 가입 요청 API
        const result = await JoinTeamAPI({ teamId, introduce });

        if (result.code === 200) {
          alert("가입 요청을 성공하였습니다.");
          navigator(-1);
        } else {
          if (result.response.data.code === 409) {
            alert("이미 가입을 요청한 상태입니다.");
          } else {
            alert("예상하지 못 한 오류로 인해 가입 요청을 실패하였습니다.");
          }
        }
      } else {
        return;
      }
    }
  };

  /* ---------------------------------------------- */
  // 가입 요청자 정보
  const [joinUser, setJoinUser] = useState<JoinUserType>();

  // 가입 요청자 정보 조회
  const handleGetJoinUserInfo = async (requestId: number) => {
    const result = await JoinDetailAPI(requestId);
    setJoinUser(result);
  };

  // '승인' 클릭 시
  const handleClickApproveBtn = async (requestId: number) => {
    if (window.confirm(`가입 요청을 승인하시겠습니까?`)) {
      const result = await JoinApproveAPI(requestId);

      if (result.code === 200) {
        alert(`가입 요청을 승인하였습니다.`);
        navigator(-1);
      } else {
        alert("가입 요청 승인을 실패하였습니다.");
      }
    } else {
      return;
    }
  };

  // '거절' 클릭 시
  const handleClickRejectBtn = async (requestId: number) => {
    if (window.confirm(`가입 요청을 거절하시겠습니까??`)) {
      const result = await JoinRejectAPI(requestId);

      if (result.code === 200) {
        alert(`가입 요청을 거절하였습니다.`);
        navigator(-1);
      } else {
        alert("가입 요청 거절을 실패하였습니다.");
      }
    } else {
      return;
    }
  };

  return {
    userInfo,
    handleGetUserInfo,
    introduce,
    setIntroduce,
    handleClickJoinBtn,
    joinUser,
    handleGetJoinUserInfo,
    handleClickApproveBtn,
    handleClickRejectBtn,
  };
};
