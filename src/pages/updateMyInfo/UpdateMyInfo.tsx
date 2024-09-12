import { useEffect, useState } from "react";
import {
  BasicBtn,
  ErrorBtn,
  SuccessBtn,
  UpdateInfoBtn,
} from "../../components/button/Button";
import {
  EmailInput,
  FootInput,
  GenderInput,
  NickNameInput,
  PasswordCheckInput,
  PasswordInput,
  PositionInput,
  ProfileInput,
  TelInput,
} from "../../components/input/Input";
import { InputTitle, PageCenterText } from "../../components/text/Text";
import { useMyInfoEvent } from "../myinfo/events";
import { useUpdateMyInfoEvent } from "./events";
import {
  Advertisement,
  Container,
  SetInfo,
  SetInfo01,
  SetInfo02,
  SetInfo03,
  SetInfoBottom,
  InfoTitle,
  SetInfoTop,
  SetProfile,
  Wrapper,
  InfoInput,
  InfoSelect,
} from "./styles";

export const UpdateMyInfo = () => {
  const { user, GetUserInfo } = useMyInfoEvent();
  const {
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
  } = useUpdateMyInfoEvent();

  // 일반 회원, 카카오 회원 구분을 위한 상태
  const [isLocalUser, setIsLocalUser] = useState(true);

  useEffect(() => {
    GetUserInfo();
  }, []);

  useEffect(() => {
    if (user) {
      if (user?.loginApproach === "Local-Login") {
        setIsLocalUser(true);
      } else if (user?.loginApproach === "Kakao-Login") {
        setIsLocalUser(false);
      }
      setProfileImage(user?.profileImg || "error");
      setNickname(user?.nickname);
      setTel(user?.phoneNumber);
      setGender(user?.gender);
      setFoot(user?.foot);
      setPosition(user?.position);
    }
  }, [user]);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <PageCenterText text={"내 정보 수정"} />
        <SetInfo>
          <SetInfoTop>
            <SetProfile>
              <InfoTitle>
                <InputTitle text={"프로필 이미지"} />
              </InfoTitle>
              <InfoInput>
                <>
                  <ProfileInput
                    src={profileImage ?? "ProfileImage Empty"}
                    handleProfileClick={handleProfileClick}
                  />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={profileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </>
              </InfoInput>
            </SetProfile>
            <SetInfo01>
              <InfoTitle>
                <InputTitle text={"이름"} />
              </InfoTitle>
              <InfoInput>
                <EmailInput value={user?.name} />
              </InfoInput>
              <InfoTitle>
                <InputTitle
                  text="닉네임"
                  msg={nickNameMsg || "※ 중복 여부를 확인해주세요"}
                  msgColor={getNickNameMsgColor()}
                />
                <div onClick={() => handleCheckNickName({ value: nickname })}>
                  {nickNameSuccess === true ? (
                    <SuccessBtn />
                  ) : nickNameSuccess === false ? (
                    <ErrorBtn />
                  ) : (
                    <BasicBtn />
                  )}
                </div>
              </InfoTitle>
              <InfoInput>
                <NickNameInput value={nickname} setValue={setNickname} />
              </InfoInput>
              <InfoTitle>
                <InputTitle
                  text="전화번호"
                  msg={telMsg || "※ 중복 여부를 확인해주세요"}
                  msgColor={getTelMsgColor()}
                />
                <div onClick={() => handleCheckTel({ value: tel })}>
                  {telSuccess === true ? (
                    <SuccessBtn />
                  ) : telSuccess === false ? (
                    <ErrorBtn />
                  ) : (
                    <BasicBtn />
                  )}
                </div>
              </InfoTitle>
              <InfoInput>
                <TelInput value={tel} setValue={setTel} />
              </InfoInput>
            </SetInfo01>
          </SetInfoTop>
          <SetInfoBottom>
            {isLocalUser && (
              <SetInfo02>
                <InfoTitle>
                  <InputTitle text={"비밀번호"} />
                </InfoTitle>
                <InfoInput>
                  <PasswordInput value={password} setValue={setPassword} />
                </InfoInput>
                <InfoTitle>
                  <InputTitle text={"비밀번호 확인"} />
                </InfoTitle>
                <InfoInput>
                  <PasswordCheckInput
                    value={passwordCheck}
                    setValue={setPasswordCheck}
                  />
                </InfoInput>
              </SetInfo02>
            )}
            <SetInfo03>
              <InfoSelect>
                <InfoTitle>
                  <InputTitle text={"성별"} />
                </InfoTitle>
                <InfoInput>
                  <GenderInput value={gender} setValue={setGender} />
                </InfoInput>
              </InfoSelect>
              <InfoSelect>
                <InfoTitle>
                  <InputTitle text={"주발"} />
                </InfoTitle>
                <InfoInput>
                  <FootInput value={foot} setValue={setFoot} />
                </InfoInput>
              </InfoSelect>
              <InfoSelect>
                <InfoTitle>
                  <InputTitle text={"선호 포지션"} />
                </InfoTitle>
                <InfoInput>
                  <PositionInput value={position} setValue={setPosition} />
                </InfoInput>
              </InfoSelect>
            </SetInfo03>
          </SetInfoBottom>
          <UpdateInfoBtn handleUpdateInfo={handleUpdateInfo} />
        </SetInfo>
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
};
