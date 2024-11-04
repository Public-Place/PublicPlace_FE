import { useEffect, useState, useRef } from "react";
import { Section3 } from "./styles";
import darkBackground from "../../assets/images/darkBackground.png";
import background from "../../assets/images/background.png";

export const Section03 = () => {
  const [backgroundImage, setBackgroundImage] =
    useState<string>(darkBackground);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setBackgroundImage(background);
          }, 3000);

          // 클린업 함수: 컴포넌트가 언마운트될 때 타이머를 클리어합니다.
          return () => clearTimeout(timer);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 클린업: 컴포넌트가 언마운트될 때 observer를 해제합니다.
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Section3 className="section" backgroundImage={backgroundImage}>
      <div ref={sectionRef}>{/*setTimeout 컨트롤용 div*/}</div>
    </Section3>
  );
};
