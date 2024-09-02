import { SmallTitle, Title } from "./styles";
import { InputTitleType } from "./types";

export const SignInTitle = () => {
  return <Title>로그인</Title>;
};

export const SignUpTitle = () => {
  return <Title>회원가입</Title>;
};

export const InputTitle = ({ text }: InputTitleType) => {
  return <SmallTitle>{text}</SmallTitle>;
};
