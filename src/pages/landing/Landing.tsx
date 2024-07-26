import { Link, useNavigate } from "react-router-dom";
import { Container, Text } from "./styles";
import { useEffect } from "react";
import { BeatLoader } from "react-spinners";

export default function Landing() {
  const navigate = useNavigate();

  // 3초 후 자동으로 "/main" 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Link to={"/main"} style={{ textDecoration: "none" }}>
      <Container>
        <Text>Loading</Text>
        <BeatLoader color="green" style={{ marginTop: "2rem" }} />
      </Container>
    </Link>
  );
}
