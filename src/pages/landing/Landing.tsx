import ReactFullpage from "@fullpage/react-fullpage";
import { Section01 } from "../../components/section/Section01";
import { Section02 } from "../../components/section/Section02";
import { Section03 } from "../../components/section/Section03";
import { Section04 } from "../../components/section/Section04";
import { Dot, DotsContainer, Wrapper } from "./styles";
import { useLandingEvent } from "./events";

export function Landing() {
  const { activeSection, setActiveSection } = useLandingEvent();

  let fullpageApiRef: any; // fullpageApi를 위한 참조 변수 선언

  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000} // 스크롤 속도 설정
        anchors={["introduce01", "introduce02", "introduce03", "introduce04"]} // 앵커 설정
        credits={{ enabled: false }} // credits를 객체 형태로 설정
        onLeave={(origin, destination) => {
          setActiveSection(destination.index); // 섹션 이동 시 활성 섹션 업데이트
        }}
        render={({ state, fullpageApi }) => {
          fullpageApiRef = fullpageApi; // fullpageApi를 참조 변수에 저장

          return (
            <Wrapper>
              <Section01 />
              <Section02 />
              <Section03 />
              <Section04 />
            </Wrapper>
          );
        }}
      />
      <DotsContainer>
        {[0, 1, 2, 3].map((index) => (
          <Dot
            key={index}
            active={index === activeSection}
            onClick={() => fullpageApiRef.moveTo(index + 1)} // 점 클릭 시 해당 섹션으로 이동
          />
        ))}
      </DotsContainer>
    </>
  );
}
