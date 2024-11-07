import styled, { keyframes } from "styled-components";
import { DefaultBackgroundColor } from "../../constants/FixValues";
import rvsTeamImg from "../../assets/images/rvsTeamImg.png";

// 페이드 인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 서서히 나타나는 애니메이션 정의
const appear = keyframes`
  from {
    opacity: 0;
    scale: calc(0.95);
  }
  to {
    opacity: 1;
    scale: calc(1);
  }
`;

// 기본 섹션 스타일
export const Section = styled.div`
  width: 100%;
  height: 100%;
`;

// Section1 스타일
export const Section1 = styled(Section)`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: end;

  position: relative;

  background-color: ${DefaultBackgroundColor};
  background-image: url(${rvsTeamImg});
  background-size: cover;
  background-position: center;
`;

export const Section1Title = styled.div`
  width: 40rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  position: absolute;
  bottom: 10rem;
  left: 10rem;

  background-color: transparent;
`;

// Section2 스타일
export const Section2 = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  position: relative;

  background: linear-gradient(to bottom, #131313, #9b9b9b);
`;

export const Section2Title = styled.div`
  width: 50rem;
  height: 10rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  position: absolute;
  top: 8rem;
  left: 10rem;

  background-color: transparent;

  opacity: 0;
  transition: opacity 0.5s ease;

  &.fade-in {
    animation: ${appear} 0.8s ease forwards;
  }
`;

export const Section2Interest = styled.div`
  /* width: calc(100% - 20rem); */
  width: 85rem;
  height: 20rem;

  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;

  margin-bottom: 7rem;

  background-color: transparent;

  opacity: 0;
  transition: opacity 0.5s ease;

  &.fade-in {
    animation: ${fadeIn} 0.8s ease forwards;
  }
`;

// Section3 스타일
export const Section3 = styled(Section).attrs<{ backgroundImage: string }>(
  (props) => ({
    style: {
      backgroundImage: `url(${props.backgroundImage})`,
    },
  })
)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  background-color: ${DefaultBackgroundColor};
  background-size: cover;
  background-position: center;
`;

export const Section3Title = styled.div`
  width: 50rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;

  position: absolute;
  top: 8rem;
  right: 10rem;

  background-color: transparent;

  opacity: 0;
  transition: opacity 0.5s ease;

  &.fade-in {
    animation: ${appear} 0.8s ease forwards;
  }
`;

export const Section3Chat = styled.div`
  width: 45rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 1rem;

  margin-left: 8rem;

  background-color: transparent;
  color: white;
`;

export const UserChat = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;

  &.fade-in {
    animation: ${fadeIn} 0.8s ease forwards; // fade-in 애니메이션 적용
  }
`;

export const AIChat = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  &.fade-in {
    animation: ${fadeIn} 0.8s ease forwards; // fade-in 애니메이션 적용
  }
`;

// Section4 스타일
export const Section4 = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  position: relative;

  background: #222222;
`;

export const Section4Title = styled.div`
  width: 50rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 5rem;
  left: calc(50% - 25rem);

  background-color: transparent;

  opacity: 0;
  transition: opacity 0.5s ease;

  &.fade-in {
    animation: ${appear} 0.8s ease forwards;
  }
`;

export const Section4Content = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 5rem;

  background-color: transparent;

  opacity: 0;
  transition: opacity 0.5s ease;

  &.fade-in {
    animation: ${fadeIn} 0.8s ease forwards;
  }
`;
