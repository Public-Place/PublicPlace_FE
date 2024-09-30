import styled from "styled-components";
import { MobileScreen, ModalColor } from "../../constants/FixValues";

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

  padding: 0.4rem 0.2rem;

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

export const SearchContainer = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.placeholder,
}))`
  width: calc(100% - 2rem);
  height: 1rem;

  padding: 0.3rem 1rem;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;

  position: relative;

  font-size: 0.7rem;

  border: 1px solid white;
  border-radius: 1rem;

  color: white;
  background-color: transparent;
`;

export const CommentInputContainer = styled.input.attrs({
  type: "text",
  placeholder: "댓글을 입력해주세요.",
})`
  width: 100%;
  height: 1rem;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.7rem;

  border: 1px solid white;
  border-radius: 0.5rem;

  color: white;
  background-color: transparent;
`;

export const Title = styled.input.attrs({
  type: "text",
  placeholder: "제목을 작성해주세요.",
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

export const Content = styled.textarea.attrs({
  placeholder: "내용을 작성해주세요.",
})`
  width: calc(100% - 1.4rem);
  height: 13rem;

  padding: 0.5rem 0.7rem;

  color: white;
  background-color: ${ModalColor};
  border: 1px solid lightgray;
  border-radius: 0.3rem;

  font-family: inherit; /* 동일한 글씨체 */

  font-size: 0.7rem;
  resize: none; // 크기 조절을 막고 싶을 경우 사용
`;

export const PostImage = styled.div<{ src?: string }>`
  width: calc(100% - 1.4rem);
  height: 13rem;

  padding: 0.5rem 0.7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid lightgray;
  border-radius: 0.3rem;

  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  &:hover {
    cursor: pointer;
  }
`;
