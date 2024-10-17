import { useEffect, useState } from "react";
import { KakaoSignInAPI } from "../../services/api/signIn/KakaoSignInAPI";
import {
  CheckDuplicationType,
  KebabModalType,
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
import Profile from "../../assets/images/Profile.png";
import { DefaultProfileS3API } from "../../services/api/s3/S3API";
import { SignUpDto } from "../../dtos/signUp/SignUpDto";
import { SignUpAPI } from "../../services/api/signUp/SignUpAPI";
import { LocalSignInAPI } from "../../services/api/signIn/LocalSignInAPI";
import { DeletePostAPI } from "../../services/api/post/DeletePostAPI";
import { useNavigate } from "react-router-dom";
import { DeleteTeamPostAPI } from "../../services/api/teamPost/DeleteTeamPostAPI";

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
      const result = await LocalSignInAPI({ email, password });

      if (result.success && localStorage.getItem("token")) {
        // 로그인 성공 시 로그인 창 없애고 "로그인" -> "로그아웃" 텍스트 변경
        setIsSignInModalOpen(false);
        setIsSignIn(true);
      } else {
        if (result.response.data.code === 500) {
          alert("예상하지 못 한 이유로 로그인에 실패하였습니다.");
        } else if (result.response.data.code === 401) {
          alert("아이디와 비밀번호를 확인해주세요.");
        }
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
    const defaultProfile = await DefaultProfileS3API(Profile);
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
    if (!email) {
      alert("이메일을 작성한 후 중복 여부를 확인해주세요.");
    } else {
      if (!email.includes("@")) {
        alert("이메일 형식에 맞게 작성해주세요.");
      } else {
        const checkEmailResult = await EmailCheckAPI({ email });

        setEmailSuccess(checkEmailResult.success);
        setEmailMsg(checkEmailResult.msg);
      }
    }
  };

  // 닉네임 중복 확인 버튼 클릭 시
  const handleCheckNickName = async ({
    value: nickname,
  }: CheckDuplicationType) => {
    if (!nickname) {
      alert("닉네임을 작성한 후 중복 여부를 확인해주세요.");
    } else {
      const checkNickNameResult = await NickNameCheckAPI({ nickname });
      setNickNameSuccess(checkNickNameResult.success);
      setNickNameMsg(checkNickNameResult.msg);
    }
  };

  // 전화번호 중복 확인 버튼 클릭 시
  const handleCheckTel = async ({ value: tel }: CheckDuplicationType) => {
    if (!tel) {
      alert("전화번호를 작성한 후 중복 여부를 확인해주세요.");
    } else {
      const checkTelResult = await TelCheckAPI({ tel });

      setTelSuccess(checkTelResult.success);
      setTelMsg(checkTelResult.msg);
    }
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

// 케밥 버튼 Modal 내부 상태 및 핸들러
export const useKebabModalEvent = () => {
  const navigate = useNavigate();

  // 수정하기 버튼 클릭 시
  const handleClickUpdate = ({ postId, isTeamPost }: KebabModalType) => {
    if (isTeamPost) {
      alert("팀 게시글 수정하기 클릭");
    } else if (!isTeamPost) {
      navigate("/writepost", { state: postId });
    }
  };

  // 삭제하기 버튼 클릭 시
  const handleClickDelete = async ({ postId, isTeamPost }: KebabModalType) => {
    if (isTeamPost) {
      if (window.confirm("정말로 게시글을 삭제하시겠습니까?")) {
        const result = await DeleteTeamPostAPI(postId);

        if (result.code === 200) {
          alert("게시글이 삭제되었습니다.");
          navigate(-1);
        } else {
          if (result.response.data.code === 500) {
            alert("예상하지 못 한 오류로 인해 게시글 삭제를 실패하였습니다.");
          } else if (result.response.data.code === 403) {
            alert("본인이 작성한 게시글만 삭제할 수 있습니다.");
          } else {
            alert(`에러 코드 : ${result.response.data.code}`);
          }
        }
      } else {
        return;
      }
    } else if (!isTeamPost) {
      if (window.confirm("정말로 게시글을 삭제하시겠습니까?")) {
        const result = await DeletePostAPI({ postId });
        console.log("result : ", result);

        if (result.code === 200) {
          alert("게시글이 삭제되었습니다.");
          navigate("/board");
        } else {
          if (result.response.data.code === 500) {
            alert("예상하지 못 한 오류로 인해 게시글 삭제를 실패하였습니다.");
          } else if (result.response.data.code === 403) {
            alert("본인이 작성한 게시글만 삭제할 수 있습니다.");
          } else {
            alert(`에러 코드 : ${result.response.data.code}`);
          }
        }
      } else {
        return;
      }
    }
  };

  return { handleClickUpdate, handleClickDelete };
};
