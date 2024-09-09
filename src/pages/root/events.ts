import { useState } from "react";

export const useRootEvents = () => {
  // 내비게이션 관련 상태
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // 내비게이션 토글과 애니메이션 효과를 위한 상태 관리 함수
  const toggleNav = () => {
    if (isNavOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsNavOpen(false);
        setIsClosing(false);
      }, 300); // 슬라이드 아웃 애니메이션 시간보다 약간 적게 설정 (동일할 경우 부자연스러운 현상 발생)
    } else {
      setIsNavOpen(true);
    }
  };

  return { toggleNav, isClosing, isNavOpen };
};
