import { LandingTitle } from "../text/Text";
import { Section4, Section4Content, Section4Title } from "./styles";
import board from "../../assets/images/board.png";
import { useEffect, useRef, useState } from "react";

export const Section04 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <Section4 className="section">
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "#222222",
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "9999999999999999",
        }}
      ></div>
      <Section4Title className={`${isVisible ? "fade-in" : ""}`}>
        <div
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <LandingTitle text={"적극적으로 활동하고,"} />
        </div>
        <div
          style={{
            width: "100%",
            height: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <LandingTitle text={"자유롭게 소통하세요"} />
        </div>
      </Section4Title>
      <Section4Content
        ref={sectionRef}
        className={`${isVisible ? "fade-in" : ""}`}
      >
        <img
          src={board}
          alt="error"
          style={{
            width: "70rem",
            height: "fit-content",
          }}
        />
      </Section4Content>
    </Section4>
  );
};
