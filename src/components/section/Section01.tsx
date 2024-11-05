import { LandingGoToBtn } from "../button/Button";
import { TeamBox } from "../teamBox/TeamBox";
import { LandingSubTitle, LandingTitle } from "../text/Text";
import {
  Section1,
  Section1Scroll01,
  Section1Scroll02,
  Section1ScrollBox,
  Section1Title,
} from "./styles";

export const Section01 = () => {
  return (
    <Section1 className="section">
      <Section1Title>
        <LandingTitle text={"공공장소"} />
        <div style={{ height: "0.5rem" }} />
        <LandingSubTitle
          text={"공 하나로 시작되는 즐거움, 공공장소에서 함께하세요 :)"}
        />
        <div style={{ height: "2rem" }} />
        <LandingGoToBtn text={"로그인 하러 가기 →"} />
      </Section1Title>
      <Section1ScrollBox>
        <Section1Scroll01>
          <TeamBox />
        </Section1Scroll01>
        <Section1Scroll02></Section1Scroll02>
      </Section1ScrollBox>
    </Section1>
  );
};
