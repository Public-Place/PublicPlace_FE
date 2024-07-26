import { useOutlet, useLocation } from "react-router-dom";
import { Container } from "./styles";
import { HambergerBtn } from "../../components/button/Button";
import { useState, useEffect } from "react";
import { useRootEvents } from "./events";
import { Navigation } from "../../components/navigation/Navigation";

// <Root />의 children들 중 경로에 맞는 페이지 출력
export default function Root() {
  const outlet = useOutlet();
  const location = useLocation();

  // 로딩 화면에서 햄버거 버튼을 가리게 하기 위한 상태
  const [isLanding, setIsLanding] = useState(location.pathname === "/");

  // isLanding값 변경
  useEffect(() => {
    setIsLanding(location.pathname === "/");
  }, [location]);

  // 내비게이션 관련 함수 및 상태
  const { toggleNav, isClosing, isNavOpen } = useRootEvents();

  return (
    <Container>
      {!isLanding && !isNavOpen && <HambergerBtn toggleNav={toggleNav} />}
      {!isLanding && isNavOpen && (
        <Navigation toggleNav={toggleNav} isClosing={isClosing} />
      )}
      {outlet}
    </Container>
  );
}
