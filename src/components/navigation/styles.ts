import styled, { keyframes } from "styled-components";

// 사이드 네비게이터 열리는 슬라이드 효과
const fadeIn = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
`;

// 사이드 네비게이터 닫히는 슬라이드 효과
const fadeOut = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const Container = styled.div<{ isClosing?: boolean }>`
  width: 20%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;

  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.4);
  color: black;
  box-shadow: 3px 0 10px 0;

  animation: ${({ isClosing }) => (isClosing ? fadeIn : fadeOut)} 0.4s
    ease-in-out;
`;

export const Category = styled.div`
  width: 100%;
  height: 65%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const Auth = styled.div`
  width: 100%;

  position: absolute;
  bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Details = styled.details`
  width: 150px;
  margin-bottom: 20px;
`;

export const Summary = styled.summary`
  font-size: 25px;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  padding-left: 40px;
`;

export const Li = styled.li`
  width: fit-content;

  margin-block: 15px;

  list-style: none;
  font-size: 15px;
  color: #4e4e4e;

  &:hover {
    cursor: pointer;
    color: whitesmoke;
  }
`;
