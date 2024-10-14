import {
  BtnContainer,
  SignUpBtnWrapper,
  SignInStateBtnWrapper,
  SignInBtnInModalContainer,
  KakaoLoginBtnContainer,
  KakaoIcon,
  CreateAccountContainer,
  FaContainer,
  CancleTeamJoin,
  BoardRules,
  Category,
  WriteComment,
  Write,
  ChatBotContainer,
  MorePostBtnContainer,
} from "./styles";
import { FaBars, FaXmark, FaCheck, FaO } from "react-icons/fa6";
import {
  CancleBtnType,
  CategoryBtnType,
  CheckValues,
  HambergerBtnType,
  handleCancleTeamJoinType,
  KakaoSignInType,
  MorePostBtnType,
  SignInBtnType,
  SignUpBtnType,
} from "./types";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineUserDelete } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import {
  BasicMsgColor,
  ErrorMsgColor,
  SuccessMsgColor,
} from "../../constants/FixValues";
import { LuPencilLine } from "react-icons/lu";
import { VscRobot } from "react-icons/vsc";
import { FaRegSadTear } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

// 햄버거 버튼
export const HambergerBtn = ({ toggleNav }: HambergerBtnType) => {
  return (
    <BtnContainer onClick={toggleNav}>
      <FaBars size={"100%"} color="white" />
    </BtnContainer>
  );
};

// X 버튼
export const CancleBtn = ({ toggleNav }: CancleBtnType) => {
  return (
    <BtnContainer onClick={toggleNav}>
      <FaXmark size={"100%"} color="white" />
    </BtnContainer>
  );
};

// 내비게이션 내부의 로그인 버튼
export const SignInBtn = ({ handleSignIn, isSignIn }: SignInBtnType) => {
  return (
    <SignInStateBtnWrapper onClick={handleSignIn}>
      {!isSignIn && "로그인"}
      {isSignIn && "로그아웃"}
    </SignInStateBtnWrapper>
  );
};

// 내비게이션 내부의 회원가입 버튼
export const SignUpBtn = ({ handleSignUp }: SignUpBtnType) => {
  return <SignUpBtnWrapper onClick={handleSignUp}>회원가입</SignUpBtnWrapper>;
};

// 로그인 창 내부의 로그인 버튼
export const SignInBtnInModal = ({ handleSignIn }: SignInBtnType) => {
  return (
    <SignInBtnInModalContainer onClick={handleSignIn}>
      로그인
    </SignInBtnInModalContainer>
  );
};

// 로그인 창 내부의 회원가입 버튼
export const SignUpBtnInModal = ({ handleSignUp }: SignUpBtnType) => {
  return (
    <div
      onClick={handleSignUp}
      style={{ fontSize: "0.7rem", marginBlock: "0.7rem", cursor: "pointer" }}
    >
      회원가입
    </div>
  );
};

// 로그인 창 내부의 카카오 로그인 버튼
export const KakaoLoginBtn = ({ handleKakaoSignInAPI }: KakaoSignInType) => {
  return (
    <KakaoLoginBtnContainer onClick={handleKakaoSignInAPI}>
      <KakaoIcon>
        <RiKakaoTalkFill size="1.2rem" color="black" />
      </KakaoIcon>
      카카오 로그인
    </KakaoLoginBtnContainer>
  );
};

// 회원가입 창 내부의 확인 버튼
export const CreateAccount = ({ handleCreateAccount }: CheckValues) => {
  return (
    <CreateAccountContainer onClick={handleCreateAccount}>
      확인
    </CreateAccountContainer>
  );
};

// faX, faO, faCheck
// 회원가입 창 내부의 중복 확인 체크 버튼
export const BasicBtn = () => {
  return (
    <FaContainer>
      <FaCheck color={BasicMsgColor} style={{ cursor: "pointer" }} />
    </FaContainer>
  );
};

// 회원가입 창 내부의 중복 확인 성공 버튼
export const SuccessBtn = () => {
  return (
    <FaContainer>
      <FaO color={SuccessMsgColor} />
    </FaContainer>
  );
};

// 회원가입 창 내부의 중복 확인 실패 버튼
export const ErrorBtn = () => {
  return (
    <FaContainer>
      <FaXmark color={ErrorMsgColor} />
    </FaContainer>
  );
};

// '내 정보 수정 페이지' 내부의 확인 버튼
export const UpdateInfoBtn = ({
  handleUpdateInfo,
}: {
  handleUpdateInfo: () => void;
}) => {
  return (
    <CreateAccountContainer onClick={handleUpdateInfo}>
      확인
    </CreateAccountContainer>
  );
};

// '내 정보 페이지' 내부의 팀 가입 신청 취소 버튼
export const CancleTeamJoinBtn = ({
  handleCancleTeamJoin,
}: handleCancleTeamJoinType) => {
  return (
    <CancleTeamJoin onClick={handleCancleTeamJoin}>
      <AiOutlineUserDelete size={"15"} color="black" />
    </CancleTeamJoin>
  );
};

// '게시판 페이지' 내부의 게시판 이용 수칙 버튼
export const BoardRulesBtn = ({
  handleClickBoardRules,
}: {
  handleClickBoardRules: () => void;
}) => {
  return (
    <BoardRules onClick={handleClickBoardRules}>
      <IoInformationCircleOutline size={16} style={{ marginRight: "0.2rem" }} />
      게시판 이용 수칙
    </BoardRules>
  );
};

// '게시판 페이지' 내부의 카테고리 버튼
export const CategoryBtn = ({
  text,
  handleClick,
  isClicked,
}: CategoryBtnType) => {
  return (
    <Category onClick={handleClick} isClicked={isClicked}>
      {text}
    </Category>
  );
};

// '게시판 페이지' 내부의 게시글 작성 버튼
export const WriteBtn = ({
  handleGoToWritePost,
}: {
  handleGoToWritePost: () => void;
}) => {
  return (
    <Write>
      <LuPencilLine size={20} onClick={handleGoToWritePost} />
    </Write>
  );
};

// '게시글 페이지' 내부의 댓글 작성 버튼
export const WriteCommentBtn = ({
  handleCreateComment,
}: {
  handleCreateComment: () => void;
}) => {
  return <WriteComment onClick={handleCreateComment}>작성</WriteComment>;
};

// '게시글 작성 페이지' 내부의 작성하기 버튼
export const WritePostBtn = ({
  text,
  handleClickPostBtn,
}: {
  text: string;
  handleClickPostBtn: () => void;
}) => {
  return (
    <CreateAccountContainer onClick={handleClickPostBtn}>
      {text}
    </CreateAccountContainer>
  );
};

// 초록색 색상의 기본 버튼
export const GreenBtn = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <CreateAccountContainer onClick={onClick}>{text}</CreateAccountContainer>
  );
};

// Chat Bot 버튼
export const ChatBotBtn = () => {
  return (
    <ChatBotContainer>
      <VscRobot size={17} />
    </ChatBotContainer>
  );
};

// 데이터 대체 버튼
export const NoDataBtn = () => {
  return <FaRegSadTear size={50} />;
};

// 더 보기 버튼
export const MorePostBtn = ({ onClick }: MorePostBtnType) => {
  return (
    <MorePostBtnContainer onClick={onClick}>
      <span>더 보기</span>
      <MdExpandMore size={17} />
    </MorePostBtnContainer>
  );
};
