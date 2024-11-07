import { useEffect, useState, useRef } from "react";
import {
  AIChat,
  RefTag,
  Section3,
  Section3Chat,
  Section3Title,
  UserChat,
} from "./styles";
import darkBackground from "../../assets/images/darkBackground.png";
import { LandingSubTitle, LandingTitle } from "../text/Text";
import { LandingGoToBtn } from "../button/Button";
import UserChat01 from "../../assets/images/UserChat01.png";
import UserChat02 from "../../assets/images/UserChat02.png";
import AIChat01 from "../../assets/images/AIChat01.png";
import AIChat02 from "../../assets/images/AIChat02.png";
import { useLandingEvent } from "../../pages/landing/events";

export const Section03 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // 타이머 참조 변수

  const { handleGoToChatBot } = useLandingEvent();

  // 각 챗의 표시 여부를 제어하기 위한 상태
  const [userChatVisible, setUserChatVisible] = useState(false);
  const [aiChatVisible, setAiChatVisible] = useState(false);
  const [userChat02Visible, setUserChat02Visible] = useState(false);
  const [aiChat02Visible, setAiChat02Visible] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 챗 순차적으로 나타나기 위한 타이머 설정
          setTimeout(() => setUserChatVisible(true), 0);
          setTimeout(() => setAiChatVisible(true), 250);
          setTimeout(() => setUserChat02Visible(true), 500);
          setTimeout(() => setAiChat02Visible(true), 750);
        } else {
          // 모든 챗을 다시 숨김
          setUserChatVisible(false);
          setAiChatVisible(false);
          setUserChat02Visible(false);
          setAiChat02Visible(false);
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
    <Section3 className="section" backgroundImage={darkBackground}>
      <RefTag ref={sectionRef} />
      <Section3Title className={userChatVisible ? "fade-in" : ""}>
        <LandingTitle text={"대화를 통해"} />
        <LandingTitle text={"팀을 찾아보세요"} />
        <div style={{ height: "1rem" }} />
        <LandingSubTitle
          text={"AI와의 대화를 통해, 더 적합한 팀을 효율적으로 찾아줍니다."}
        />
      </Section3Title>
      <div style={{ position: "absolute", bottom: "7rem", right: "10rem" }}>
        <LandingGoToBtn
          text={"AI와 대화하러 가기 →"}
          onClick={handleGoToChatBot}
        />
      </div>
      <Section3Chat>
        {userChatVisible && (
          <UserChat className={userChatVisible ? "fade-in" : ""}>
            <img
              src={UserChat01}
              alt="error"
              style={{
                width: "30rem",
              }}
            />
          </UserChat>
        )}
        {aiChatVisible && (
          <AIChat className={aiChatVisible ? "fade-in" : ""}>
            <img
              src={AIChat01}
              alt="error"
              style={{
                width: "30rem",
              }}
            />
          </AIChat>
        )}
        {userChat02Visible && (
          <UserChat className={userChat02Visible ? "fade-in" : ""}>
            <img
              src={UserChat02}
              alt="error"
              style={{
                width: "30rem",
              }}
            />
          </UserChat>
        )}
        {aiChat02Visible && (
          <AIChat className={aiChat02Visible ? "fade-in" : ""}>
            <img
              src={AIChat02}
              alt="error"
              style={{
                width: "30rem",
              }}
            />
          </AIChat>
        )}
      </Section3Chat>
    </Section3>
  );
};
