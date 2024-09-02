import {
  BtnContainer,
  SignUpBtnWrapper,
  SignInStateBtnWrapper,
} from "./styles";
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

export const SignInBtn = () => {
  return <SignInStateBtnWrapper>로그인</SignInStateBtnWrapper>;
};

export const SignUpBtn = () => {
  return <SignUpBtnWrapper>회원가입</SignUpBtnWrapper>;
};
