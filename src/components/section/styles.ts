import styled, { keyframes } from "styled-components";
import { DefaultBackgroundColor } from "../../constants/FixValues";
import rvsTeamImg from "../../assets/images/rvsTeamImg.png";

// 기본 섹션 스타일
export const Section = styled.div`
  width: 100%;
  height: 100%;
`;

// Section1 스타일
export const Section1 = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: ${DefaultBackgroundColor};
  background-image: url(${rvsTeamImg});
  background-size: cover;
  background-position: center;
`;

// Section2 스타일
export const Section2 = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to bottom, #353535, #9b9b9b);
`;

export const Section3 = styled(Section).attrs<{ backgroundImage: string }>(
  (props) => ({
    style: {
      backgroundImage: `url(${props.backgroundImage})`,
    },
  })
)`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${DefaultBackgroundColor};
  background-size: cover;
  background-position: center;
`;

// Section4 스타일
export const Section4 = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #222222;
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

export const Section1ScrollBox = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 13rem;

  background-color: transparent;
`;

export const Section1Scroll01 = styled.div`
  width: 16rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  position: relative;
`;

export const Section1Scroll02 = styled.div`
  width: 16rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  position: relative;
`;
