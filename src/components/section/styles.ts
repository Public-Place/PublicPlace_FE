import styled from "styled-components";
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

  color: red;
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

  color: orange;
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

  color: green;
  background-color: ${DefaultBackgroundColor};
  background-size: cover;
  background-position: center;
`;

// Section4 스타일
export const Section4 = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: blue;
  background: linear-gradient(to right, #222222, #888888);
`;
