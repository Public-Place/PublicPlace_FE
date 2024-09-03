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
}: SignInModalType) => {
  const { handleKakaoSignInAPI } = useSignInModalEvent();

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
      <ModalTitle>
        <SignInTitle />
      </ModalTitle>
      <ModalInput>
        <InputTitle text="이메일" />
        <EmailInput />
      </ModalInput>
      <ModalInput>
        <InputTitle text="비밀번호" />
        <PasswordInput />
      </ModalInput>
      <ModalButton>
        <SignInBtnInModal />
        <SignUpBtnInModal handleSignUp={handleSignUp} />
        <hr
          style={{ width: "100%", color: "lightgray", marginBlock: "0rem" }}
        />
        <KakaoLoginBtn handleKakaoSignInAPI={handleKakaoSignInAPI} />
      </ModalButton>
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
    handleCheckValues,
  } = useSignUpModalEvent();

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
      <ModalTitle>
        <SignUpTitle />
      </ModalTitle>
      <ModalInput>
        <div style={{ position: "relative", width: "20rem" }}>
          <InputTitle text="이메일" msg="※ 중복 여부를 확인해주세요" />
          <BasicBtn />
        </div>
        <EmailInput value={email} setValue={setEmail} />
      </ModalInput>
      <ModalInput>
        <InputTitle text="비밀번호" />
        <PasswordInput value={password} setValue={setPassword} />
      </ModalInput>
      <ModalInput>
        <InputTitle text="비밀번호 확인" />
        <PasswordCheckInput value={passwordCheck} setValue={setPasswordCheck} />
      </ModalInput>
      <ModalInput>
        <InputTitle text="이름" />
        <NameInput value={name} setValue={setName} />
      </ModalInput>
      <ModalInput>
        <div style={{ position: "relative", width: "20rem" }}>
          <InputTitle text="닉네임" msg="※ 중복 여부를 확인해주세요" />
          <SuccessBtn />
        </div>
        <NickNameInput value={nickname} setValue={setNickname} />
      </ModalInput>
      <ModalInput>
        <div style={{ position: "relative", width: "20rem" }}>
          <InputTitle text="전화번호" msg="※ 중복 여부를 확인해주세요" />
          <ErrorBtn />
        </div>
        <TelInput value={tel} setValue={setTel} />
      </ModalInput>
      <ModalSelect>
        <ModalInput width="47%">
          <InputTitle text="주발" />
          <FootInput value={foot} setValue={setFoot} />
        </ModalInput>
        <ModalInput width="47%">
          <InputTitle text="선호 포지션" />
          <PositionInput value={position} setValue={setPosition} />
        </ModalInput>
      </ModalSelect>
      <ModalSelect>
        <ModalInput width="47%">
          <InputTitle text="성별" />
          <GenderInput value={gender} setValue={setGender} />
        </ModalInput>
        <ModalInput width="47%">
          <InputTitle text="연령대" />
          <AgeRangeInput value={ageRange} setValue={setAgeRange} />
        </ModalInput>
      </ModalSelect>
      <ModalButton>
        <CreateAccount handleCheckValues={handleCheckValues} />
      </ModalButton>
    </Modal>
  );
};
