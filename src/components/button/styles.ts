import styled from "styled-components";
import { KakaoLoginBtnColor, BtnColor } from "../../constants/FixValues";

export const BtnContainer = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 1rem;
  left: 1rem;

  z-index: 9999;

  &:hover {
    cursor: pointer;
  }
`;

export const SignInStateBtnWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  padding-inline: 10px;

  color: #4e4e4e;
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: whitesmoke;
  }
`;

export const SignUpBtnWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  padding-inline: 10px;

  color: #4e4e4e;
  background-color: transparent;
  border: none;
  border-left: 1px solid #4e4e4e;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: whitesmoke;
  }
`;

export const SignInBtnInModalContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0rem;

  color: white;
  background-color: ${BtnColor};
  font-weight: bold;

  border: 1px solid lightgray;
  border-radius: 0.3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const KakaoLoginBtnContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 0.5rem 0rem;
  margin-top: 1rem;

  color: black;
  background-color: ${KakaoLoginBtnColor};
  font-weight: bold;

  border: 1px solid lightgray;
  border-radius: 0.3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const KakaoIcon = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0.5rem;
`;

export const CreateAccountContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 0.5rem 2rem;
  margin-top: 1rem;

  color: white;
  background-color: ${BtnColor};
  font-weight: bold;

  border: 1px solid lightgray;
  border-radius: 0.3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ChatBotContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 0.3rem 1rem;

  color: white;
  background-color: ${BtnColor};
  font-weight: bold;

  border: 1px solid lightgray;
  border-radius: 0.3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const FaContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0px;
  right: 0px;

  padding: 0.2rem 0.2rem;
`;

export const CancleTeamJoin = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const BoardRules = styled.div`
  width: fit-content;
  height: fit-content;

  margin-left: 1rem;
  margin-bottom: 1.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Category = styled.div<{ isClicked: boolean }>`
  width: fit-content;
  height: fit-content;

  padding: 0.4rem 1rem;
  margin-right: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid white;
  border-radius: 0.7rem;

  font-size: 0.6rem;

  color: white;

  background-color: ${(props) => (props.isClicked ? "gray" : "#3c3c3c")};

  &:hover {
    cursor: pointer;
  }
`;

export const WriteComment = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.5rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid white;
  border-radius: 0.5rem;

  font-size: 0.7rem;
  font-weight: bold;

  background-color: ${BtnColor};

  &:hover {
    cursor: pointer;
  }
`;

export const Write = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  position: absolute;
  bottom: 1.2rem;
  right: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
