import styled from "styled-components";
import { MobileScreen, ModalColor } from "../../constants/FixValues";
import DefaultProfile from "../../assets/images/background.png";
import { url } from "inspector";

export const Email = styled.input.attrs({
  type: "email",
  placeholder: "이메일을 입력해주세요.",
})`
  width: calc(100% - 1.4rem);
  height: fit-content;

  padding: 0.5rem 0.7rem;

  color: white;
  background-color: ${ModalColor};
  border: 1px solid lightgray;
  border-radius: 0.3rem;

  font-size: 0.7rem;
`;

export const Password = styled.input.attrs({
  type: "password",
  placeholder: "비밀번호를 입력해주세요.",
})`
  width: calc(100% - 1.4rem);
  height: fit-content;

  padding: 0.5rem 0.7rem;

  color: white;
  background-color: ${ModalColor};
  border: 1px solid lightgray;
  border-radius: 0.3rem;

  font-size: 0.7rem;
`;

export const PasswordCheck = styled.input.attrs({
  type: "password",
  placeholder: "비밀번호를 다시 입력해주세요.",
})`
  width: calc(100% - 1.4rem);
  height: fit-content;

  padding: 0.5rem 0.7rem;

  color: white;
  background-color: ${ModalColor};
  border: 1px solid lightgray;
  border-radius: 0.3rem;

  font-size: 0.7rem;
`;

export const Name = styled.input.attrs({
  type: "text",
  placeholder: "이름을 입력해주세요.",
})`
  width: calc(100% - 1.4rem);
  height: fit-content;

  padding: 0.5rem 0.7rem;

  color: white;
  background-color: ${ModalColor};
  border: 1px solid lightgray;
  border-radius: 0.3rem;

  font-size: 0.7rem;
`;

export const NickName = styled.input.attrs({
  type: "text",
  placeholder: "닉네임을 입력해주세요.",
})`
  width: calc(100% - 1.4rem);
  height: fit-content;

  padding: 0.5rem 0.7rem;

  color: white;
  background-color: ${ModalColor};
  border: 1px solid lightgray;
  border-radius: 0.3rem;

  font-size: 0.7rem;
`;

export const Tel = styled.input.attrs({
  type: "text",
  placeholder: "전화번호를 입력해주세요.",
})`
  width: calc(100% - 1.4rem);
  height: fit-content;

  padding: 0.5rem 0.7rem;

  color: white;
  background-color: ${ModalColor};
  border: 1px solid lightgray;
  border-radius: 0.3rem;

  font-size: 0.7rem;
`;

export const Select = styled.select`
  width: 100%;
  height: fit-content;

  padding: 0.5rem 0.2rem;

  color: white;
  background-color: ${ModalColor};
  border: 1px solid lightgray;
  border-radius: 0.3rem;

  font-size: 0.7rem;

  @media (max-width: ${MobileScreen}) {
    width: 90%;
  }
`;

export const Profile = styled.div<{ src?: string }>`
  width: 13rem;
  height: 13rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid white;
  border-radius: 50%;

  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  &:hover {
    cursor: pointer;
  }
`;
