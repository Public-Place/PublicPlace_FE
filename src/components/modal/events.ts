import { useEffect, useState } from "react";
import { KakaoSignInAPI } from "../../services/api/signIn/KakaoSignInAPI";
import {
  CheckDuplicationType,
  SignUpModalType,
  useSignInModalEventType,
} from "./types";
import { EmailCheckAPI } from "../../services/api/checkDuplication/EmailCheckAPI";
import {
  BasicMsgColor,
  ErrorMsgColor,
  SuccessMsgColor,
} from "../../constants/FixValues";
import { NickNameCheckAPI } from "../../services/api/checkDuplication/NickNameCheckAPI";
import { TelCheckAPI } from "../../services/api/checkDuplication/TelCheckAPI";
import DefaultProfile from "../../assets/images/DefaultProfile.png";
import { S3API } from "../../services/api/s3/S3API";
import { SignUpDto } from "../../dtos/signUp/SignUpDto";
import { SignUpAPI } from "../../services/api/signUp/SignUpAPI";
import { LocalSignInAPI } from "../../services/api/signIn/LocalSignInAPI";

// 로그인 창 내부 상태 및 핸들러
export const useSignInModalEvent = ({
  isSignInModalOpen,
  setIsSignInModalOpen,
  setIsSignIn,
}: useSignInModalEventType) => {
  // 일반 로그인 입력 값들
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 창 새로 열릴 시 입력창 초기화
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isSignInModalOpen]);

  // 필수 입력 값 확인
  const CheckEssentialValues = () => {
    if (!email) {
      alert("이메일을 입력해주세요.");
      return false;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return false;
    }
    return true;
  };

  // 일반 로그인 버튼 클릭 시
  const handleCheckAccount = async () => {
    // 필수 입력 값 확인 (미입력 시 종료))
    if (!CheckEssentialValues()) {
      return;
    } else {
      // 로그인 요청 API 들어가는 위치
      await LocalSignInAPI({ email, password });

      // 로그인 성공 시 로그인 창 없애고 "로그인" -> "로그아웃" 텍스트 변경
      if (localStorage.getItem("token")) {
        setIsSignInModalOpen(false);
        setIsSignIn(true);
      }
    }
  };

  // 카카오 URL 불러오는 API
  const handleKakaoSignInAPI = async () => {
    const kakaoURL = await KakaoSignInAPI();
    window.location.href = kakaoURL;
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleKakaoSignInAPI,
    handleCheckAccount,
  };
};

// 회원가입 창 내부 상태 및 핸들러
export const useSignUpModalEvent = ({
  isSignUpModalOpen,
  setIsSignUpModalOpen,
}: SignUpModalType) => {
  // 회원가입 필수 입력 값들
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

  // 회원가입 창 새로 열릴 시 입력창 초기화
  useEffect(() => {
    setEmail("");
    setPassword("");
    setPasswordCheck("");
    setName("");
    setNickname("");
    setTel("");
    setFoot("");
    setPosition("");
    setGender("");
    setAgeRange("");
  }, [isSignUpModalOpen]);

  // s3 이미지 변환 로직
  const handleTransformImg = async () => {
    const defaultProfile = await S3API(DefaultProfile);
    return defaultProfile;
  };

  // 회원가입 창 내부 확인 버튼 클릭 시
  const handleCreateAccount = async () => {
    // 필수 입력 값 확인 (미입력 시 종료))
    if (!CheckEssentialValues()) {
      return;
    } else {
      // 모든 중복 여부 확인 시에만 회원가입 가능
      if (emailSuccess !== true) {
        alert("이메일 중복 여부를 확인해주세요.");
      } else if (nickNameSuccess !== true) {
        alert("닉네임 중복 여부를 확인해주세요.");
      } else if (telSuccess !== true) {
        alert("전화번호 중복 여부를 확인해주세요.");
      } else if (
        emailSuccess === true &&
        nickNameSuccess === true &&
        telSuccess === true
      ) {
        // 기본 프로필 이미지 생성 (.png -> url)
        const defaultProfile = await handleTransformImg();

        // 회원가입 로직
        const SignUpData: SignUpDto = {
          email: email,
          password: password,
          name: name,
          nickname: nickname,
          phoneNumber: tel,
          foot: foot,
          position: position,
          gender: gender,
          ageRange: ageRange,
          profileImg: defaultProfile,
        };

        // 회원가입 요청 API
        const signUpResult = await SignUpAPI(SignUpData);

        // 회원가입 성공 시 회원가입 창 hide
        if (signUpResult.success) {
          setIsSignUpModalOpen(false);
        }
      }
    }
  };

  // 필수 입력 값 확인 및 비밀번호 일치 여부 확인
  const CheckEssentialValues = () => {
    if (!email) {
      alert("이메일을 입력해주세요.");
      return false;
    } else if (!email.includes("@")) {
      alert("이메일 형식에 맞게 작성해주세요.");
      return false;
    } else if (!password) {
      alert("비밀번호를 입력해주세요.");
      return false;
    } else if (!passwordCheck) {
      alert("비밀번호 확인을 입력해주세요.");
      return false;
    } else if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    } else if (!name) {
      alert("이름을 입력해주세요.");
      return false;
    } else if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return false;
    } else if (!tel) {
      alert("전화번호를 입력해주세요.");
      return false;
    } else if (!foot || foot === "선택") {
      alert("주발을 선택해주세요.");
      return false;
    } else if (!position || position === "선택") {
      alert("선호 포지션을 선택해주세요.");
      return false;
    } else if (!gender || gender === "선택") {
      alert("성별을 선택해주세요.");
      return false;
    } else if (!ageRange || ageRange === "선택") {
      alert("연령대를 선택해주세요.");
      return false;
    }
    return true;
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

  // 이메일 상태가 바뀔 경우 emailSuccess를 null로 변경
  useEffect(() => {
    setEmailSuccess(null);
    setEmailMsg("");
  }, [email]);

  // 닉네임 상태가 바뀔 경우 nickNameSuccess를 null로 변경
  useEffect(() => {
    setNickNameSuccess(null);
    setNickNameMsg("");
  }, [nickname]);

  // 전화번호 상태가 바뀔 경우 telSuccess를 null로 변경
  useEffect(() => {
    setTelSuccess(null);
    setTelMsg("");
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
