import { useOutlet } from "react-router-dom";
import { Container } from "./styles";
import { HambergerBtn } from "../../components/button/Button";
import { useRootEvents } from "./events";
import { Navigation } from "../../components/navigation/Navigation";
import { useEffect } from "react";

// <Root />의 children들 중 경로에 맞는 페이지 출력
export default function Root() {
  const outlet = useOutlet();

  // 내비게이션 관련 함수 및 상태
  const { toggleNav, isClosing, isNavOpen } = useRootEvents();

  return (
    <Container>
      {!isNavOpen && <HambergerBtn toggleNav={toggleNav} />}
      {isNavOpen && <Navigation toggleNav={toggleNav} isClosing={isClosing} />}
      {outlet}
    </Container>
  );
}
