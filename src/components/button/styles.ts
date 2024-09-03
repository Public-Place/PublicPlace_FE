import styled from "styled-components";
import { KakaoLoginBtnColor, BtnColor } from "../../constants/FixValues";

export const BtnContainer = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 1rem;
  left: 1rem;

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
  width: 30%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 0.5rem 0rem;
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
