import { useEffect, useState, useRef } from "react";
import { Section3 } from "./styles";
import darkBackground from "../../assets/images/darkBackground.png";
import background from "../../assets/images/background.png";

export const Section03 = () => {
  const [backgroundImage, setBackgroundImage] =
    useState<string>(darkBackground);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // 타이머 참조 변수

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Section03이 화면에 보일 때마다 새로운 타이머 설정
          timerRef.current = setTimeout(() => {
            setBackgroundImage(background);
          }, 2000);
        } else {
          // Section03이 화면에서 사라지면 타이머를 클리어
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
          setBackgroundImage(darkBackground); // 초기 배경 이미지로 복원
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // 컴포넌트 언마운트 시 타이머 클리어
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Section3 className="section" backgroundImage={backgroundImage}>
      <div ref={sectionRef}></div>
      {/* 컨트롤용 div */}
    </Section3>
  );
};
