import { useEffect, useState } from "react";
import { KakaoSignInAPI } from "../../apis/api/kakaoSignIn/KakaoSignInAPI";
import { CheckDuplicationType } from "./types";
import { EmailCheckAPI } from "../../apis/api/checkDuplication/EmailCheckAPI";
import {
  BasicMsgColor,
  ErrorMsgColor,
  SuccessMsgColor,
} from "../../constants/FixValues";
import { NickNameCheckAPI } from "../../apis/api/checkDuplication/NickNameCheckAPI";
import { TelCheckAPI } from "../../apis/api/checkDuplication/TelCheckAPI";

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

  // 회원가입 창 내부 확인 버튼 클릭 시
  const handleCreateAccount = () => {
    CheckEssentialValues();
  };

  // 필수 입력값 확인 및 비밀번호 일치 여부 확인
  const CheckEssentialValues = () => {
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!email.includes("@")) {
      alert("이메일 형식에 맞게 작성해주세요.");
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

  /* ---------- 중복 확인 관련 기능 ---------- */

  // 중복 여부 상태 및 멘트
  const [emailSuccess, setEmailSuccess] = useState<boolean | null>(null);
  const [emailMsg, setEmailMsg] = useState("");
  const [nickNameSuccess, setNickNameSuccess] = useState<boolean | null>(null);
  const [nickNameMsg, setNickNameMsg] = useState("");
  const [telSuccess, setTelSuccess] = useState<boolean | null>(null);
  const [telMsg, setTelMsg] = useState("");

  // 이메일 중복 확인 버튼 클릭 시
  const handleCheckEmail = async ({ value: email }: CheckDuplicationType) => {
    if (!email.includes("@")) {
      alert("이메일 형식에 맞게 작성해주세요.");
    } else {
      const checkEmailResult = await EmailCheckAPI({ email });

      setEmailSuccess(checkEmailResult.success);
      setEmailMsg(checkEmailResult.msg);
    }
  };

  // 닉네임 중복 확인 버튼 클릭 시
  const handleCheckNickName = async ({
    value: nickname,
  }: CheckDuplicationType) => {
    const checkNickNameResult = await NickNameCheckAPI({ nickname });

    setNickNameSuccess(checkNickNameResult.success);
    setNickNameMsg(checkNickNameResult.msg);
  };

  // 전화번호 중복 확인 버튼 클릭 시
  const handleCheckTel = async ({ value: tel }: CheckDuplicationType) => {
    const checkTelResult = await TelCheckAPI({ tel });

    setTelSuccess(checkTelResult.success);
    setTelMsg(checkTelResult.msg);
  };

  // 중복 여부에 따른 메시지 색상 결정 로직 (이메일)
  const getEmailMsgColor = () => {
    if (emailSuccess === true) return SuccessMsgColor;
    if (emailSuccess === false) return ErrorMsgColor;
    return BasicMsgColor;
  };

  // 중복 여부에 따른 메시지 색상 결정 로직 (닉네임)
  const getNickNameMsgColor = () => {
    if (nickNameSuccess === true) return SuccessMsgColor;
    if (nickNameSuccess === false) return ErrorMsgColor;
    return BasicMsgColor;
  };

  // 중복 여부에 따른 메시지 색상 결정 로직 (전화번호)
  const getTelMsgColor = () => {
    if (telSuccess === true) return SuccessMsgColor;
    if (telSuccess === false) return ErrorMsgColor;
    return BasicMsgColor;
  };

  // 이메일 상태가 빈 문자열일 경우 emailSuccess를 null로 변경
  useEffect(() => {
    if (email === "") {
      setEmailSuccess(null);
      setEmailMsg("");
    }
  }, [email]);

  // 닉네임 상태가 빈 문자열일 경우 nickNameSuccess를 null로 변경
  useEffect(() => {
    if (nickname === "") {
      setNickNameSuccess(null);
      setNickNameMsg("");
    }
  }, [nickname]);

  // 전화번호 상태가 빈 문자열일 경우 telSuccess를 null로 변경
  useEffect(() => {
    if (tel === "") {
      setTelSuccess(null);
      setTelMsg("");
    }
  }, [tel]);

  /* -------------------- */

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
    handleCreateAccount,
    handleCheckEmail,
    emailSuccess,
    emailMsg,
    getEmailMsgColor,
    handleCheckNickName,
    nickNameSuccess,
    nickNameMsg,
    getNickNameMsgColor,
    handleCheckTel,
    telSuccess,
    telMsg,
    getTelMsgColor,
  };
};
