import {
  Msg,
  PageCenterTitle,
  SmallTitle,
  TeamDetail,
  TeamName,
  TeamState,
  Title,
  UserInfo,
} from "./styles";
import { InputTitleType } from "./types";

export const SignInTitle = () => {
  return <Title>로그인</Title>;
};

export const SignUpTitle = () => {
  return <Title>회원가입</Title>;
};

export const InputTitle = ({ text, msg, msgColor }: InputTitleType) => {
  return (
    <SmallTitle>
      <div>
        {text}
        <Msg style={{ color: msgColor }}>{msg}</Msg>
      </div>
    </SmallTitle>
  );
};

export const UserInfoText = ({ text }: { text: string }) => {
  return <UserInfo>{text}</UserInfo>;
};

export const TeamStateText = ({ text }: { text: string }) => {
  return <TeamState>{text}</TeamState>;
};

export const TeamNameText = ({ text }: { text: string }) => {
  return <TeamName>{text}</TeamName>;
};

export const TeamDetailText = ({ text }: { text: string }) => {
  return <TeamDetail>{text}</TeamDetail>;
};

export const PageCenterText = ({ text }: { text: string }) => {
  return <PageCenterTitle>{text}</PageCenterTitle>;
};
