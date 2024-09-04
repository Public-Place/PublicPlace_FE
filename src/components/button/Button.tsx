import {
  BtnContainer,
  SignUpBtnWrapper,
  SignInStateBtnWrapper,
  SignInBtnInModalContainer,
  KakaoLoginBtnContainer,
  KakaoIcon,
  CreateAccountContainer,
  FaContainer,
} from "./styles";
import { FaBars, FaXmark, FaCheck, FaO } from "react-icons/fa6";
import {
  CancleBtnType,
  CheckValues,
  HambergerBtnType,
  KakaoSignInType,
  SignInBtnType,
  SignUpBtnType,
} from "./types";
import { RiKakaoTalkFill } from "react-icons/ri";
import {
  BasicMsgColor,
  ErrorMsgColor,
  SuccessMsgColor,
} from "../../constants/FixValues";

// 햄버거 버튼
export const HambergerBtn = ({ toggleNav }: HambergerBtnType) => {
  return (
    <BtnContainer onClick={toggleNav}>
      <FaBars size={"100%"} color="white" />
    </BtnContainer>
  );
};

// X 버튼
export const CancleBtn = ({ toggleNav }: CancleBtnType) => {
  return (
    <BtnContainer onClick={toggleNav}>
      <FaXmark size={"100%"} color="white" />
    </BtnContainer>
  );
};

// 내비게이션 내부의 로그인 버튼
export const SignInBtn = ({ handleSignIn, isSignIn }: SignInBtnType) => {
  return (
    <SignInStateBtnWrapper onClick={handleSignIn}>
      {!isSignIn && "로그인"}
      {isSignIn && "로그아웃"}
    </SignInStateBtnWrapper>
  );
};

// 내비게이션 내부의 회원가입 버튼
export const SignUpBtn = ({ handleSignUp }: SignUpBtnType) => {
  return <SignUpBtnWrapper onClick={handleSignUp}>회원가입</SignUpBtnWrapper>;
};

// 로그인 창 내부의 로그인 버튼
export const SignInBtnInModal = ({ handleSignIn }: SignInBtnType) => {
  return (
    <SignInBtnInModalContainer onClick={handleSignIn}>
      로그인
    </SignInBtnInModalContainer>
  );
};

// 로그인 창 내부의 회원가입 버튼
export const SignUpBtnInModal = ({ handleSignUp }: SignUpBtnType) => {
  return (
    <div
      onClick={handleSignUp}
      style={{ fontSize: "0.7rem", marginBlock: "0.7rem", cursor: "pointer" }}
    >
      회원가입
    </div>
  );
};

// 로그인 창 내부의 카카오 로그인 버튼
export const KakaoLoginBtn = ({ handleKakaoSignInAPI }: KakaoSignInType) => {
  return (
    <KakaoLoginBtnContainer onClick={handleKakaoSignInAPI}>
      <KakaoIcon>
        <RiKakaoTalkFill size="1.2rem" color="black" />
      </KakaoIcon>
      카카오 로그인
    </KakaoLoginBtnContainer>
  );
};

// 회원가입 창 내부의 확인 버튼
export const CreateAccount = ({ handleCreateAccount }: CheckValues) => {
  return (
    <CreateAccountContainer onClick={handleCreateAccount}>
      확인
    </CreateAccountContainer>
  );
};

// faX, faO, faCheck
// 회원가입 창 내부의 중복 확인 체크 버튼
export const BasicBtn = () => {
  return (
    <FaContainer>
      <FaCheck color={BasicMsgColor} style={{ cursor: "pointer" }} />
    </FaContainer>
  );
};

// 회원가입 창 내부의 중복 확인 성공 버튼
export const SuccessBtn = () => {
  return (
    <FaContainer>
      <FaO color={SuccessMsgColor} />
    </FaContainer>
  );
};

// 회원가입 창 내부의 중복 확인 실패 버튼
export const ErrorBtn = () => {
  return (
    <FaContainer>
      <FaXmark color={ErrorMsgColor} />
    </FaContainer>
  );
};
