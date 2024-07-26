import { useEffect, useState } from "react";
import { Container, Slogan } from "./styles";
import { useButtonEvent } from "../../components/button/events";
// 슬로건
const slogan01 = ["Feet on Turf,", "Play for Passion,", "Link by Sports,"];
const slogan02 = ["Voices in Surf", "Connect for Fun", "Unite by words"];

export default function Main() {
  const [randomSlogan01, setRandomSlogan01] = useState("");
  const [randomSlogan02, setRandomSlogan02] = useState("");
  const { userName } = useButtonEvent();

  useEffect(() => {
    console.log(userName);

    // 슬로건 랜덤 출력을 위한 난수 생성
    const index = Math.floor(Math.random() * slogan01.length);

    setRandomSlogan01(slogan01[index]);
    setRandomSlogan02(slogan02[index]);
  }, [userName]);

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
