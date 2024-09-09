import Modal from "react-modal";
import { SignInModalType, SignUpModalType } from "./types";
import { InputTitle, SignInTitle, SignUpTitle } from "../text/Text";
import { ModalButton, ModalInput, ModalSelect, ModalTitle } from "./styles";
import { ModalColor } from "../../constants/FixValues";
import {
  AgeRangeInput,
  EmailInput,
  FootInput,
  GenderInput,
  NameInput,
  NickNameInput,
  PasswordCheckInput,
  PasswordInput,
  PositionInput,
  TelInput,
} from "../input/Input";
import {
  BasicBtn,
  CreateAccount,
  ErrorBtn,
  KakaoLoginBtn,
  SignInBtnInModal,
  SignUpBtnInModal,
  SuccessBtn,
} from "../button/Button";
import { useSignInModalEvent, useSignUpModalEvent } from "./events";

// 로그인 창
export const SignInModal = ({
  isSignInModalOpen,
  setIsSignInModalOpen,
  handleSignUp,
  setIsSignIn,
}: SignInModalType) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleKakaoSignInAPI,
    handleCheckAccount,
  } = useSignInModalEvent({
    isSignInModalOpen,
    setIsSignInModalOpen,
    setIsSignIn,
  });

  return (
    <Modal
      isOpen={isSignInModalOpen}
      onRequestClose={() => setIsSignInModalOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: "fit-content",
          height: "fit-content",
          backgroundColor: ModalColor,
          color: "white",
          border: "1px solid lightgray",
          borderRadius: "1rem",
          padding: "1rem 2rem",
        },
      }}
    >
      <div
        tabIndex={0} // 키보드 입력을 받기 위한 tabIndex 설정
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleCheckAccount(); // Enter키를 누르면 로그인 실행
          }
        }}
      >
        <ModalTitle>
          <SignInTitle />
        </ModalTitle>
        <ModalInput>
          <InputTitle text="이메일" />
          <EmailInput value={email} setValue={setEmail} />
        </ModalInput>
        <ModalInput>
          <InputTitle text="비밀번호" />
          <PasswordInput value={password} setValue={setPassword} />
        </ModalInput>
        <ModalButton>
          <SignInBtnInModal handleSignIn={handleCheckAccount} />
          <SignUpBtnInModal handleSignUp={handleSignUp} />
          <hr
            style={{ width: "100%", color: "lightgray", marginBlock: "0rem" }}
          />
          <KakaoLoginBtn handleKakaoSignInAPI={handleKakaoSignInAPI} />
        </ModalButton>
      </div>
    </Modal>
  );
};

// 회원가입 창
export const SignUpModal = ({
  isSignUpModalOpen,
  setIsSignUpModalOpen,
}: SignUpModalType) => {
  const {
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
  } = useSignUpModalEvent({ isSignUpModalOpen, setIsSignUpModalOpen });

  return (
    <Modal
      isOpen={isSignUpModalOpen}
      onRequestClose={() => setIsSignUpModalOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: "fit-content",
          height: "fit-content",
          backgroundColor: ModalColor,
          color: "white",
          border: "1px solid lightgray",
          borderRadius: "1rem",
          padding: "1rem 2rem",
          overflow: "scroll",
        },
      }}
    >
      <div
        tabIndex={0} // 키보드 입력을 받기 위한 tabIndex 설정
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleCreateAccount(); // Enter키를 누르면 로그인 실행
          }
        }}
      >
        <ModalTitle>
          <SignUpTitle />
        </ModalTitle>
        <ModalInput>
          {/* 이메일 입력창 */}
          <div style={{ position: "relative", width: "20rem" }}>
            <InputTitle
              text="이메일"
              msg={emailMsg || "※ 중복 여부를 확인해주세요"}
              msgColor={getEmailMsgColor()}
            />
            <div onClick={() => handleCheckEmail({ value: email })}>
              {emailSuccess === true ? (
                <SuccessBtn />
              ) : emailSuccess === false ? (
                <ErrorBtn />
              ) : (
                <BasicBtn />
              )}
            </div>
          </div>
          <EmailInput value={email} setValue={setEmail} />
        </ModalInput>
        <ModalInput>
          {/* 비밀번호 입력창 */}
          <InputTitle text="비밀번호" />
          <PasswordInput value={password} setValue={setPassword} />
        </ModalInput>
        <ModalInput>
          {/* 비밀번호 확인 입력창 */}
          <InputTitle text="비밀번호 확인" />
          <PasswordCheckInput
            value={passwordCheck}
            setValue={setPasswordCheck}
          />
        </ModalInput>
        <ModalInput>
          {/* 이름 입력창 */}
          <InputTitle text="이름" />
          <NameInput value={name} setValue={setName} />
        </ModalInput>
        <ModalInput>
          {/* 닉네임 입력창 */}
          <div style={{ position: "relative", width: "20rem" }}>
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
          </div>
          <NickNameInput value={nickname} setValue={setNickname} />
        </ModalInput>
        <ModalInput>
          {/* 전화번호 입력창 */}
          <div style={{ position: "relative", width: "20rem" }}>
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
          </div>
          <TelInput value={tel} setValue={setTel} />
        </ModalInput>
        <ModalSelect>
          <ModalInput width="47%">
            {/* 주발 선택창 */}
            <InputTitle text="주발" />
            <FootInput value={foot} setValue={setFoot} />
          </ModalInput>
          <ModalInput width="47%">
            {/* 선호 포지션 선택창 */}
            <InputTitle text="선호 포지션" />
            <PositionInput value={position} setValue={setPosition} />
          </ModalInput>
        </ModalSelect>
        <ModalSelect>
          <ModalInput width="47%">
            {/* 성별 선택창 */}
            <InputTitle text="성별" />
            <GenderInput value={gender} setValue={setGender} />
          </ModalInput>
          <ModalInput width="47%">
            <InputTitle text="연령대" /> {/* 연령대 선택창 */}
            <AgeRangeInput value={ageRange} setValue={setAgeRange} />
          </ModalInput>
        </ModalSelect>
        <ModalButton>
          <CreateAccount handleCreateAccount={handleCreateAccount} />
        </ModalButton>
      </div>
    </Modal>
  );
};
