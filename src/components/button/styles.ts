import styled from "styled-components";

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

export const LoginStateBtnWrapper = styled.button`
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

export const JoinBtnWrapper = styled.button`
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
