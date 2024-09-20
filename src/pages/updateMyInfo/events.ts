import { useEffect, useRef, useState } from "react";
import { UpdateMyInfoDto } from "../../dtos/updateMyInfo/UpdateMyInfoDto";
import { S3API } from "../../services/api/s3/S3API";
import { CheckDuplicationType } from "../../components/modal/types";
import { NickNameCheckAPI } from "../../services/api/checkDuplication/NickNameCheckAPI";
import { TelCheckAPI } from "../../services/api/checkDuplication/TelCheckAPI";
import {
  BasicMsgColor,
  ErrorMsgColor,
  SuccessMsgColor,
} from "../../constants/FixValues";
import { GetUserAPI } from "../../services/api/user/GetUserAPI";
import {
  UpdateKakaoUserAPI,
  UpdateLocalUserAPI,
} from "../../services/api/user/UpdateUserAPI";
import { useNavigate } from "react-router-dom";

export const useUpdateMyInfoEvent = () => {
  const navigator = useNavigate();

  // 프로필 이미지를 위한 Ref
  const profileInputRef = useRef<HTMLInputElement>(null);

  // 화면에 출력할 프로필 이미지 상태
  const [profileImage, setProfileImage] = useState("");

  // 프로필 이미지 변경 시 실행되는 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setProfileImage(reader.result);
          console.log("reader.result :", reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 파일 탐색기 열기
  const handleProfileClick = () => {
    profileInputRef.current?.click();
  };

  /* ----------------------------------------------- */

  // 수정할 회원 정보
  const [nickname, setNickname] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [gender, setGender] = useState("");
  const [foot, setFoot] = useState("");
  const [position, setPosition] = useState("");

  // 필수 입력 값 확인 및 비밀번호 일치 여부 확인 (일반 로그인)
  const CheckLocalEssentialValues = () => {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return false;
    } else if (!passwordCheck) {
      alert("비밀번호 확인을 입력해주세요.");
      return false;
    } else if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
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
    }
    return true;
  };

  // 필수 입력 값 확인 및 비밀번호 일치 여부 확인 (카카오 로그인)
  const CheckKakaoEssentialValues = () => {
    if (!nickname) {
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
    }
    return true;
  };

  // 중복 확인 관련 상태
  const [nickNameSuccess, setNickNameSuccess] = useState<boolean | null>(null);
  const [nickNameMsg, setNickNameMsg] = useState("");
  const [telSuccess, setTelSuccess] = useState<boolean | null>(null);
  const [telMsg, setTelMsg] = useState("");

  // 닉네임 중복 확인 버튼 클릭 시
  const handleCheckNickName = async ({
    value: nickname,
  }: CheckDuplicationType) => {
    const existingInfo = await GetUserAPI();

    if (existingInfo.nickname === nickname) {
      setNickNameSuccess(true);
      setNickNameMsg("사용 가능한 닉네임입니다. (기존과 동일)");
    } else {
      const checkNickNameResult = await NickNameCheckAPI({ nickname });

      setNickNameSuccess(checkNickNameResult.success);
      setNickNameMsg(checkNickNameResult.msg);
    }
  };

  // 전화번호 중복 확인 버튼 클릭 시
  const handleCheckTel = async ({ value: tel }: CheckDuplicationType) => {
    const existingInfo = await GetUserAPI();

    if (existingInfo.phoneNumber === tel) {
      setTelSuccess(true);
      setTelMsg("사용 가능한 전화번호입니다. (기존과 동일)");
    } else {
      const checkTelResult = await TelCheckAPI({ tel });

      setTelSuccess(checkTelResult.success);
      setTelMsg(checkTelResult.msg);
    }
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

  // '내 정보 수정 페이지' 내부의 확인 버튼 클릭 시
  const handleUpdateInfo = async () => {
    // console.log("닉네임 : " + nickname);
    // console.log("전화번호 : " + tel);
    // console.log("성별 : " + gender);
    // console.log("주발 : " + foot);
    // console.log("선호 포지션 : " + position);
    // console.log("프로필 이미지 : " + profileImage);

    // 기본 프로필 이미지일 경우 S3에 업로드하지 않음
    const isDefaultProfileImage =
      profileImage ===
      "https://promfren-bucket.s3.ap-northeast-2.amazonaws.com/publicplace/DefaultProfile.png";

    // 프로필 이미지가 기본 이미지가 아닌 경우에만 S3에 업로드
    const profileImg = isDefaultProfileImage
      ? profileImage // 기본 이미지 그대로 유지
      : await S3API(profileImage); // 변경된 이미지만 S3에 업로드

    const approach = await GetUserAPI();

    if (approach.loginApproach === "Local-Login") {
      if (!CheckLocalEssentialValues()) {
        return;
      } else {
        // 모든 중복 여부 확인 시에만 정보 수정 가능
        if (nickNameSuccess !== true) {
          alert("닉네임 중복 여부를 확인해주세요.");
        } else if (telSuccess !== true) {
          alert("전화번호 중복 여부를 확인해주세요.");
        } else if (nickNameSuccess === true && telSuccess === true) {
          const UpdateMyLocalInfoData: UpdateMyInfoDto = {
            nickname: nickname,
            phoneNumber: tel,
            gender: gender,
            foot: foot,
            position: position,
            profileImg: profileImg, // 프로필 이미지가 기본 이미지면 그대로 유지
            password: password,
          };

          await UpdateLocalUserAPI(UpdateMyLocalInfoData);
          navigator("/myinfo");
          window.location.reload();
        }
      }
    } else if (approach.loginApproach === "Kakao-Login") {
      if (!CheckKakaoEssentialValues()) {
        return;
      } else {
        // 모든 중복 여부 확인 시에만 정보 수정 가능
        if (nickNameSuccess !== true) {
          alert("닉네임 중복 여부를 확인해주세요.");
        } else if (telSuccess !== true) {
          alert("전화번호 중복 여부를 확인해주세요.");
        } else if (nickNameSuccess === true && telSuccess === true) {
          const UpdateMyKakaoInfoData: UpdateMyInfoDto = {
            nickname: nickname,
            phoneNumber: tel,
            gender: gender,
            foot: foot,
            position: position,
            profileImg: profileImg, // 프로필 이미지가 기본 이미지면 그대로 유지
          };

          await UpdateKakaoUserAPI(UpdateMyKakaoInfoData);
          navigator("/myinfo");
          window.location.reload();
        }
      }
    }
  };

  return {
    profileInputRef,
    profileImage,
    setProfileImage,
    handleFileChange,
    handleProfileClick,
    nickname,
    setNickname,
    tel,
    setTel,
    password,
    setPassword,
    passwordCheck,
    setPasswordCheck,
    gender,
    setGender,
    foot,
    setFoot,
    position,
    setPosition,
    handleUpdateInfo,
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
