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
  // 회원가입 필수 입력값들
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
    CheckEssentialValues();
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

  // 필수 입력값 확인 및 비밀번호 일치 여부 확인
  const CheckEssentialValues = () => {
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (!passwordCheck) {
      alert("비밀번호 확인을 입력해주세요.");
      return;
    }
    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (!tel) {
      alert("전화번호를 입력해주세요.");
      return;
    }
    if (!foot) {
      alert("주발을 선택해주세요.");
      return;
    }
    if (!position) {
      alert("선호 포지션을 선택해주세요.");
      return;
    }
    if (!gender) {
      alert("성별을 선택해주세요.");
      return;
    }
    if (!ageRange) {
      alert("연령대를 선택해주세요.");
      return;
    }
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
