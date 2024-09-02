import styled from "styled-components";
import img from "../../assets/images/background.png";
import { MobileScreen } from "../../constants/FixValues";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: end;

  color: white;

  background-image: url(${img});
  background-size: cover;
`;

export const Slogan = styled.div`
  width: 40rem;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: end;

  margin-right: 10%;

  text-align: end;

  font-size: 4rem;
  color: white;

  white-space: nowrap;

  // 모바일 웹 환경
  @media (max-width: ${MobileScreen}) {
    font-size: 2rem;
  }
`;
