import { LandingArrowBtn } from "../button/Button";
import { LandingSubTitle, LandingTitle } from "../text/Text";
import {
  DownClone,
  DownInfinitySlide,
  DownPlain,
  Section1,
  Section1Title,
  SlideArea,
  UpClone,
  UpInfinitySlide,
  UpPlain,
} from "./styles";
import {
  team01,
  team02,
  team03,
  team04,
  team05,
  team06,
  team07,
  team08,
  team09,
  team10,
  team11,
  team12,
} from "../teamBox/MockUp";
import { TeamBox } from "../teamBox/TeamBox";

export const Section01 = () => {
  return (
    <Section1 className="section">
      <Section1Title>
        <LandingTitle text={"공공장소"} />
        <div style={{ height: "0.5rem" }} />
        <LandingSubTitle
          text={"공 하나로 시작되는 즐거움, 공공장소에서 함께하세요 :)"}
        />
      </Section1Title>
      <SlideArea>
        <UpInfinitySlide>
          <UpPlain>
            <TeamBox team={team01} />
            <TeamBox team={team02} />
            <TeamBox team={team03} />
            <TeamBox team={team04} />
            <TeamBox team={team05} />
            <TeamBox team={team06} />
          </UpPlain>
          <UpClone>
            <TeamBox team={team01} />
            <TeamBox team={team02} />
            <TeamBox team={team03} />
            <TeamBox team={team04} />
            <TeamBox team={team05} />
            <TeamBox team={team06} />
          </UpClone>
        </UpInfinitySlide>
        <DownInfinitySlide>
          <DownClone>
            <TeamBox team={team07} />
            <TeamBox team={team08} />
            <TeamBox team={team09} />
            <TeamBox team={team10} />
            <TeamBox team={team11} />
            <TeamBox team={team12} />
          </DownClone>
          <DownPlain>
            <TeamBox team={team07} />
            <TeamBox team={team08} />
            <TeamBox team={team09} />
            <TeamBox team={team10} />
            <TeamBox team={team11} />
            <TeamBox team={team12} />
          </DownPlain>
        </DownInfinitySlide>
      </SlideArea>
      <LandingArrowBtn />
    </Section1>
  );
};
