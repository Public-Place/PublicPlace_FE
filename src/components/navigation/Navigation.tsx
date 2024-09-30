import { CancleBtn, SignInBtn, SignUpBtn } from "../button/Button";
import { Auth, Category, Container, Details, Li, Summary, Ul } from "./styles";
import { NavagationType } from "./types";
import { SignInModal, SignUpModal } from "../modal/Modal";
import { useNavigationEvent } from "./events";
import { useEffect, useState } from "react";

export const Navigation = ({ toggleNav, isClosing }: NavagationType) => {
  // 로그인 여부에 따라 '로그인', '로그아웃' 텍스트 변경을 위한 상태
  const [isSignIn, setIsSignIn] = useState(false);

  // 새로고침 시 로그인 상태를 유지하기 위한 로직
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  }, []);

  // 필요한 상태 및 핸들러
  const {
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
  } = useNavigationEvent({ setIsSignIn, toggleNav });

  // 로그인 여부에 따라 각자 다른 함수 실행
  const handleAuthAction = () => {
    if (isSignIn) {
      handleSignOut();
      toggleNav();
    } else {
      handleSignIn();
    }
  };

  return (
    <Container isClosing={isClosing}>
      <CancleBtn toggleNav={toggleNav} />
      <Category>
        <Details open>
          <Summary>&nbsp;&nbsp;Team</Summary>
          <Ul>
            <Li onClick={handleGoToSearchTeam}>팀 찾기</Li>
            <Li>팀 생성</Li>
          </Ul>
        </Details>
        <Details open>
          <Summary>&nbsp;&nbsp;Board</Summary>
          <Ul>
            <Li onClick={handleGoToBoard}>게시판</Li>
            <Li onClick={handleGoToWritePost}>게시글 작성</Li>
          </Ul>
        </Details>
        <Details open>
          <Summary>&nbsp;&nbsp;MyPage</Summary>
          <Ul>
            <Li onClick={handleGoToMyInfo}>내 정보</Li>
            <Li onClick={handleGoToUpdateMyInfo}>내 정보 수정</Li>
          </Ul>
        </Details>
      </Category>
      <Auth>
        <SignInBtn handleSignIn={handleAuthAction} isSignIn={isSignIn} />
        {!isSignIn && <SignUpBtn handleSignUp={handleSignUp} />}
      </Auth>
      <SignInModal
        isSignInModalOpen={isSignInModalOpen}
        setIsSignInModalOpen={setIsSignInModalOpen}
        handleSignUp={handleSignUp}
        setIsSignIn={setIsSignIn}
      />
      <SignUpModal
        isSignUpModalOpen={isSignUpModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen}
      />
    </Container>
  );
};
