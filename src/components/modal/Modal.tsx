import Modal from "react-modal";
import { SignInModalType, SignUpModalType } from "./types";
import { InputTitle, SignInTitle, SignUpTitle } from "../text/Text";
import { ModalButton, ModalInput, ModalSelect, ModalTitle } from "./styles";
import { ModalColor } from "../../constants/FixValues";
import {
  DayInput,
  EmailInput,
  FootInput,
  GenderInput,
  MonthInput,
  NameInput,
  NickNameInput,
  PasswordCheckInput,
  PasswordInput,
  PositionInput,
  TelInput,
  YearInput,
} from "../input/Input";
import {
  CreateAccount,
  KakaoLoginBtn,
  SignInBtnInModal,
  SignUpBtnInModal,
} from "../button/Button";

// 로그인 창
export const SignInModal = ({
  isSignInModalOpen,
  setIsSignInModalOpen,
  handleSignUp,
}: SignInModalType) => {
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
        <KakaoLoginBtn />
      </ModalButton>
    </Modal>
  );
};

// 회원가입 창
export const SignUpModal = ({
  isSignUpModalOpen,
  setIsSignUpModalOpen,
}: SignUpModalType) => {
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
        },
      }}
    >
      <ModalTitle>
        <SignUpTitle />
      </ModalTitle>
      <ModalInput>
        <InputTitle text="이메일" />
        <EmailInput />
      </ModalInput>
      <ModalInput>
        <InputTitle text="비밀번호" />
        <PasswordInput />
      </ModalInput>
      <ModalInput>
        <InputTitle text="비밀번호 확인" />
        <PasswordCheckInput />
      </ModalInput>
      <ModalInput>
        <InputTitle text="이름" />
        <NameInput />
      </ModalInput>
      <ModalInput>
        <InputTitle text="닉네임" />
        <NickNameInput />
      </ModalInput>
      <ModalInput>
        <InputTitle text="전화번호" />
        <TelInput />
      </ModalInput>
      <ModalSelect>
        <ModalInput width="30%">
          <InputTitle text="성별" />
          <GenderInput />
        </ModalInput>
        <ModalInput width="30%">
          <InputTitle text="주발" />
          <FootInput />
        </ModalInput>
        <ModalInput width="30%">
          <InputTitle text="선호 포지션" />
          <PositionInput />
        </ModalInput>
      </ModalSelect>
      <ModalSelect>
        <ModalInput width="30%">
          <InputTitle text="연" />
          <YearInput />
        </ModalInput>
        <ModalInput width="30%">
          <InputTitle text="월" />
          <MonthInput />
        </ModalInput>
        <ModalInput width="30%">
          <InputTitle text="일" />
          <DayInput />
        </ModalInput>
      </ModalSelect>
      <ModalButton>
        <CreateAccount />
      </ModalButton>
    </Modal>
  );
};
