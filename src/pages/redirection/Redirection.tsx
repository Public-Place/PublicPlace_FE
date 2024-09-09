import { useEffect } from "react";
import { KakaoSignInRedirectionAPI } from "../../services/api/signIn/KakaoSignInAPI";
import { useNavigate } from "react-router-dom";
import { RedirectionContainer } from "./styles";
import ClipLoader from "react-spinners/ClipLoader";

export default function Redirection() {
  // 현재 URL에서 code 값 추출
  const code = new URL(window.location.toString()).searchParams.get("code");

  // useNavigate() 사용
  const navigator = useNavigate();

  useEffect(() => {
    // 비동기 함수화
    const handleKakaoRedirection = async () => {
      await KakaoSignInRedirectionAPI({ code });
    };

    if (code) {
      handleKakaoRedirection();

      // 카카오 로그인 완료 후 0.3초 뒤에 메인 페이지로 이동
      setTimeout(() => {
        navigator("/");
      }, 100);
    }
  }, [code, navigator]);

  return (
    <RedirectionContainer>
      <ClipLoader size={"2rem"} color="white" />
    </RedirectionContainer>
  );
}
