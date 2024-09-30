import { useState } from "react";
import { NavigationEventType } from "./types";
import { useNavigate } from "react-router-dom";

export const useNavigationEvent = ({
  setIsSignIn,
  toggleNav,
}: NavigationEventType) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const navigator = useNavigate();

  // 로그인 버튼 클릭 시
  const handleSignIn = () => {
    setIsSignInModalOpen(true);
  };

  // 로그아웃 버튼 클릭 시
  const handleSignOut = () => {
    if (window.confirm("로그아웃을 하시겠습니까?")) {
      localStorage.removeItem("token");
      setIsSignIn(false);
      navigator("/");
      alert("로그아웃 되었습니다.");
    } else {
      return;
    }
  };

  // 회원가입 버튼 클릭 시
  const handleSignUp = () => {
    setIsSignUpModalOpen(true);
  };

  // '팀 찾기' 클릭 시
  const handleGoToSearchTeam = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigator("/searchteam");
      toggleNav();
    } else {
      alert("로그인 시 이용 가능합니다.");
    }
  };

  // '게시판' 클릭 시
  const handleGoToBoard = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigator("/board");
      toggleNav();
    } else {
      alert("로그인 시 이용 가능합니다.");
    }
  };

  // '게시글 작성' 클릭 시
  const handleGoToWritePost = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigator("/writepost");
      toggleNav();
      window.location.reload();
    } else {
      alert("로그인 시 이용 가능합니다.");
    }
  };

  // '내 정보' 클릭 시
  const handleGoToMyInfo = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigator("/myinfo");
      toggleNav();
    } else {
      alert("로그인 시 이용 가능합니다.");
    }
  };

  // '내 정보 수정' 클릭 시
  const handleGoToUpdateMyInfo = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigator("/updatemyinfo");
      toggleNav();
    } else {
      alert("로그인 시 이용 가능합니다.");
    }
  };

  return {
    isSignInModalOpen,
    setIsSignInModalOpen,
    handleSignIn,
    handleSignOut,
    isSignUpModalOpen,
    setIsSignUpModalOpen,
    handleSignUp,
    handleGoToSearchTeam,
    handleGoToBoard,
    handleGoToWritePost,
    handleGoToMyInfo,
    handleGoToUpdateMyInfo,
  };
};
