import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLandingEvent = () => {
  const [activeSection, setActiveSection] = useState(0);

  const navigator = useNavigate();

  // '로그인 하러 가기' 클릭 시

  // '팀 찾으러 가기' 클릭 시
  const handleGoToSearchTeam = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigator("/searchteam");
    } else {
      alert("로그인 시 이용 가능합니다.");
    }
  };

  // 'AI와 대화하러 가기' 클릭 시
  const handleGoToChatBot = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigator("/chatbot");
    } else {
      alert("로그인 시 이용 가능합니다.");
    }
  };

  return {
    activeSection,
    setActiveSection,
    handleGoToSearchTeam,
    handleGoToChatBot,
  };
};
