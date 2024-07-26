import { BtnContainer, JoinBtnWrapper, LoginStateBtnWrapper } from "./styles";
import { FaBars, FaXmark } from "react-icons/fa6";
import { CancleBtnType, HambergerBtnType } from "./types";

export const HambergerBtn = ({ toggleNav }: HambergerBtnType) => {
  return (
    <BtnContainer onClick={toggleNav}>
      <FaBars size={"100%"} color="white" />
    </BtnContainer>
  );
};

export const CancleBtn = ({ toggleNav }: CancleBtnType) => {
  return (
    <BtnContainer onClick={toggleNav}>
      <FaXmark size={"100%"} color="white" />
    </BtnContainer>
  );
};

export const LoginBtn = () => {
  return <LoginStateBtnWrapper>로그인</LoginStateBtnWrapper>;
};

export const JoinBtn = () => {
  return <JoinBtnWrapper>회원가입</JoinBtnWrapper>;
};
