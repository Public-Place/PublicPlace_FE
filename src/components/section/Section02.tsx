import { useEffect, useRef, useState } from "react";
import {
  Interest01,
  Interest02,
  Interest03,
  Interest04,
} from "../interest/Interest";
import { LandingSubTitle, LandingTitle } from "../text/Text";
import { RefTag, Section2, Section2Interest, Section2Title } from "./styles";
import { LandingGoToBtn } from "../button/Button";
import { useLandingEvent } from "../../pages/landing/events";

export const Section02 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { handleGoToSearchTeam } = useLandingEvent();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 뷰포트에 들어오면 애니메이션 상태 true로 설정
          setIsVisible(true);
        } else {
          // 뷰포트를 벗어나면 상태를 false로 설정하여 다시 애니메이션 가능하도록
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5, // 요소가 50% 이상 보일 때 트리거
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 언마운트 시 옵저버 해제
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Section2 className="section">
      <RefTag ref={sectionRef} />
      <Section2Title className={`${isVisible ? "fade-in" : ""}`}>
        <LandingTitle text={"어떤 팀을 찾고 계신가요?"} />
        <div style={{ height: "0.5rem" }} />
        <LandingSubTitle text={"관심사에 맞춰 효율적으로 팀을 찾아보세요 !"} />
      </Section2Title>
      {/*  */}
      <div
        style={{
          width: "85rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <LandingGoToBtn
          text={"팀 찾으러 가기 →"}
          onClick={handleGoToSearchTeam}
        />
      </div>
      <Section2Interest className={`${isVisible ? "fade-in" : ""}`}>
        <Interest01 />
        <Interest02 />
        <Interest03 />
        <Interest04 />
      </Section2Interest>
    </Section2>
  );
};
