import { useState } from "react";
import { KakaoSignInAPI } from "../../apis/api/kakaoSignIn/KakaoSignInAPI";

// 로그인 창 내부 상태 및 핸들러
export const useSignInModalEvent = () => {
  // 카카오 URL 불러오는 API
  const handleKakaoSignInAPI = async () => {
    const kakaoURL = await KakaoSignInAPI();
    window.location.href = kakaoURL;
  };

  return { handleKakaoSignInAPI };
};

// 회원가입 창 내부 상태 및 핸들러
export const useSignUpModalEvent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [tel, setTel] = useState("");
  const [foot, setFoot] = useState("");
  const [position, setPosition] = useState("");
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState("");

  // 입력창 입력값 확인용 테스트 핸들러
  const handleCheckValues = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Password Check:", passwordCheck);
    console.log("Name:", name);
    console.log("Nickname:", nickname);
    console.log("Tel:", tel);
    console.log("Foot:", foot);
    console.log("Position:", position);
    console.log("Gender:", gender);
    console.log("Age Range:", ageRange);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    passwordCheck,
    setPasswordCheck,
    name,
    setName,
    nickname,
    setNickname,
    tel,
    setTel,
    foot,
    setFoot,
    position,
    setPosition,
    gender,
    setGender,
    ageRange,
    setAgeRange,
    handleCheckValues,
  };
};
