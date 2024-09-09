import { useEffect, useState } from "react";
import { Container, Slogan } from "./styles";
import { useMainEvents } from "./events";

// 슬로건
const slogan01 = ["Feet on Turf,", "Play for Passion,", "Link by Sports,"];
const slogan02 = ["Voices in Surf", "Connect for Fun", "Unite by words"];

export default function Main() {
  const [randomSlogan01, setRandomSlogan01] = useState("");
  const [randomSlogan02, setRandomSlogan02] = useState("");

  const { handleCheckToken } = useMainEvents();

  // 페이지 렌더링 시 실행되는 로직
  useEffect(() => {
    // 슬로건 랜덤 출력을 위한 난수 생성
    const index = Math.floor(Math.random() * slogan01.length);

    setRandomSlogan01(slogan01[index]);
    setRandomSlogan02(slogan02[index]);

    handleCheckToken();
  }, []);

  return (
    <Container>
      <Slogan>
        {randomSlogan01}
        <br />
        {randomSlogan02}
      </Slogan>
    </Container>
  );
}
