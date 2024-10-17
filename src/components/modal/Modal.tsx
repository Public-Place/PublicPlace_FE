import Modal from "react-modal";
import {
  BoardRulesType,
  KebabModalType,
  SignInModalType,
  SignUpModalType,
} from "./types";
import { InputTitle, RulesTitle, SignInTitle, SignUpTitle } from "../text/Text";
import {
  KebabContainer,
  KebabContent,
  ModalButton,
  ModalInput,
  ModalSelect,
  ModalTitle,
  RulesDetail,
} from "./styles";
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
import {
  useKebabModalEvent,
  useSignInModalEvent,
  useSignUpModalEvent,
} from "./events";
import { useBoardEvent } from "../../pages/board/events";
import { useEffect } from "react";

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

/* -------------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------------- */
// 게시글 페이지 케밥 버튼
export const KebabModal = ({ postId, isTeamPost }: KebabModalType) => {
  const { handleClickUpdate, handleClickDelete } = useKebabModalEvent();

  return (
    <KebabContainer>
      <KebabContent onClick={() => handleClickUpdate({ postId, isTeamPost })}>
        수정하기
      </KebabContent>
      <KebabContent onClick={() => handleClickDelete({ postId, isTeamPost })}>
        삭제하기
      </KebabContent>
    </KebabContainer>
  );
};

// 게시판 이용 수칙 Modal
export const BoardRules = ({
  isBoardRulesOpen,
  setIsBoardRulesOpen,
}: BoardRulesType) => {
  return (
    <Modal
      isOpen={isBoardRulesOpen}
      onRequestClose={() => setIsBoardRulesOpen(false)}
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
          height: "30rem",
          backgroundColor: ModalColor,
          color: "white",
          border: "1px solid lightgray",
          borderRadius: "1rem",
          padding: "1rem 2rem",
        },
      }}
    >
      <ModalTitle>
        <RulesTitle />
      </ModalTitle>
      <ModalInput width={"25rem"}>
        <InputTitle text="1. 예의 및 존중" />
        <RulesDetail>
          모든 사용자들은 서로를 존중하며 예의 있게 대화해야 합니다. 비방, 욕설,
          차별적 발언, 혐오 표현은 금지됩니다.
        </RulesDetail>
      </ModalInput>
      <ModalInput width={"25rem"}>
        <InputTitle text="2. 불법 광고 및 스팸 금지" />
        <RulesDetail>
          광고, 스팸, 불법 홍보 행위는 허용되지 않습니다. 이를 위반할 경우 경고
          없이 게시글이 삭제되거나 계정이 차단될 수 있습니다.
        </RulesDetail>
      </ModalInput>
      <ModalInput width={"25rem"}>
        <InputTitle text="3. 개인정보 보호" />
        <RulesDetail>
          본인이나 타인의 개인정보(주소, 전화번호, 이메일 등)를 게시하지 마세요.
          개인정보 유출로 인한 피해는 본인이 책임져야 합니다.
        </RulesDetail>
      </ModalInput>
      <ModalInput width={"25rem"}>
        <InputTitle text="4. 저작권 준수" />
        <RulesDetail>
          저작권이 있는 콘텐츠(이미지, 음악, 글 등)를 무단으로 게시하지 마세요.
          저작권 위반 시 법적 책임이 따를 수 있습니다.
        </RulesDetail>
      </ModalInput>
      <ModalInput width={"25rem"}>
        <InputTitle text="5. 게시물 주제 준수" />
        <RulesDetail>
          각 게시판에 맞는 주제로 글을 작성해 주세요.
          <br />
          주제에 맞지 않는 게시물은 예고 없이 이동되거나 삭제될 수 있습니다.
        </RulesDetail>
      </ModalInput>
      <ModalInput width={"25rem"}>
        <InputTitle text="6. 불법 행위 금지" />
        <RulesDetail>
          불법 행위(해킹, 불법 다운로드, 개인정보 도용 등)를 조장하거나 관련
          정보를 공유하는 행위는 절대 금지됩니다.
        </RulesDetail>
      </ModalInput>
      <ModalInput width={"25rem"}>
        <InputTitle text="7. 중복 및 도배 금지" />
        <RulesDetail>
          같은 내용의 게시물을 반복적으로 올리거나 게시판을 도배하는 행위는
          금지됩니다.
        </RulesDetail>
      </ModalInput>
      <ModalInput width={"25rem"}>
        <InputTitle text="8. 게시글 신고" />
        <RulesDetail>
          부적절한 게시물이나 댓글은 관리자에게 신고할 수 있습니다. 신고 시 빠른
          시일 내에 적절한 조치를 취할 예정입니다.
        </RulesDetail>
      </ModalInput>
      <ModalInput width={"25rem"}>
        <InputTitle text="9. 운영 방침 준수" />
        <RulesDetail>
          운영진의 결정 및 공지사항을 존중하고 따르세요 규칙 위반 시 경고 또는
          계정 차단 조치가 있을 수 있습니다.
        </RulesDetail>
      </ModalInput>
      <ModalInput width={"25rem"}>
        <InputTitle text="10. 이용 수칙 변경" />
        <RulesDetail>
          본 이용 수칙은 필요에 따라 사전 예고 없이 변경될 수 있으며, 변경된
          내용은 게시판 공지사항을 통해 안내됩니다.
        </RulesDetail>
      </ModalInput>
    </Modal>
  );
};
