import { useState } from "react";
import { NavigationEventType } from "./types";

export const useNavigationEvent = ({ setIsSignIn }: NavigationEventType) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  // 로그인 버튼 클릭 시
  const handleSignIn = () => {
    setIsSignInModalOpen(true);
  };

  // 로그아웃 버튼 클릭 시
  const handleSignOut = () => {
    if (window.confirm("로그아웃을 하시겠습니까?")) {
      localStorage.removeItem("token");
      setIsSignIn(false);
    } else {
      return;
    }
  };

  // 회원가입 버튼 클릭 시
  const handleSignUp = () => {
    setIsSignUpModalOpen(true);
  };

  return {
    isSignInModalOpen,
    setIsSignInModalOpen,
    handleSignIn,
    handleSignOut,
    isSignUpModalOpen,
    setIsSignUpModalOpen,
    handleSignUp,
  };
};
