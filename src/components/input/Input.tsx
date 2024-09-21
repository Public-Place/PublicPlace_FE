import {
  Email,
  Select,
  Name,
  NickName,
  Password,
  PasswordCheck,
  Tel,
  Profile,
  SearchContainer,
  CommentInputContainer,
  Title,
  Content,
  PostImage,
} from "./styles";
import {
  PostImageInputType,
  ProfileInputType,
  SearchPostType,
  SignUpInputType,
} from "./types";
import { LuRefreshCcw } from "react-icons/lu";
import { MdSearch } from "react-icons/md";

/* --------------------------------------------------------------- */

// 이메일 입력창
export const EmailInput = ({ value, setValue }: SignUpInputType) => {
  // 이메일 입력창 유효성 검사 (영어, 숫자, "@", "." 허용)
  const emailRegex = /^[a-zA-Z0-9.@]*$/;

  return (
    <Email
      value={value}
      onChange={(e) => {
        if (
          setValue &&
          emailRegex.test(e.target.value) &&
          !/\s/.test(e.target.value)
        ) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 비밀번호 입력창
export const PasswordInput = ({ value, setValue }: SignUpInputType) => {
  // 비밀번호 입력창 유효성 검사 (영어, 숫자, 모든 특수문자 허용)
  const passwordRegex = /^[a-zA-Z0-9\W]*$/;

  return (
    <Password
      value={value}
      onChange={(e) => {
        if (
          setValue &&
          passwordRegex.test(e.target.value) &&
          !/\s/.test(e.target.value)
        ) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 비밀번호 확인 입력창
export const PasswordCheckInput = ({ value, setValue }: SignUpInputType) => {
  // 비밀번호 확인 입력창 유효성 검사 (영어, 숫자, 모든 특수문자 허용)
  const passwordCheckRegex = /^[a-zA-Z0-9\W]*$/;

  return (
    <PasswordCheck
      value={value}
      onChange={(e) => {
        if (
          setValue &&
          passwordCheckRegex.test(e.target.value) &&
          !/\s/.test(e.target.value)
        ) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 이름 입력창
export const NameInput = ({ value, setValue }: SignUpInputType) => {
  // 이름 입력창 유효성 검사 (한글, 영어 허용)
  const nameRegex = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]*$/;

  return (
    <Name
      value={value}
      onChange={(e) => {
        if (
          setValue &&
          nameRegex.test(e.target.value) &&
          !/\s/.test(e.target.value)
        ) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 닉네임 입력창
export const NickNameInput = ({ value, setValue }: SignUpInputType) => {
  // 닉네임 입력창 유효성 검사 (한글, 영어, 숫자 허용)
  const nickNameRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]*$/;

  return (
    <NickName
      value={value}
      onChange={(e) => {
        if (
          setValue &&
          nickNameRegex.test(e.target.value) &&
          !/\s/.test(e.target.value)
        ) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 닉네임 출력창
export const FixNickNameInput = ({ value }: { value?: string }) => {
  return <NickName value={value} />;
};

// 전화번호 입력창
export const TelInput = ({ value, setValue }: SignUpInputType) => {
  // 전화번호 입력창 유효성 검사
  const telRegex = /^[0-9-]*$/;

  return (
    <Tel
      value={value}
      onChange={(e) => {
        if (
          setValue &&
          telRegex.test(e.target.value) &&
          !/\s/.test(e.target.value)
        ) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 게시글 제목 입력창
export const TitleInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Title
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 게시글 내용 입력창
export const ContentInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Content
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

/* --------------------------------------------------------------- */

// 성별 선택 콤보박스
export const GenderInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Select
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    >
      <option value={"선택"} selected>
        선택
      </option>
      <option value={"남자"}>남자</option>
      <option value={"여자"}>여자</option>
    </Select>
  );
};

// 주발 선택 콤보박스
export const FootInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Select
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    >
      <option value={"선택"} selected>
        선택
      </option>
      <option value={"왼발"}>왼발</option>
      <option value={"오른발"}>오른발</option>
      <option value={"양발"}>양발</option>
    </Select>
  );
};

// 선호 포지션 선택 콤보박스
export const PositionInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Select
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    >
      <option value={"선택"} selected>
        선택
      </option>
      <option value={"스트라이커"}>스트라이커</option>
      <option value={"윙어"}>윙어</option>
      <option value={"공격형 미드필더"}>공격형 미드필더</option>
      <option value={"중앙 미드필더"}>중앙 미드필더</option>
      <option value={"수비형 미드필더"}>수비형 미드필더</option>
      <option value={"사이드백"}>사이드백</option>
      <option value={"센터백"}>센터백</option>
      <option value={"골키퍼"}>골키퍼</option>
    </Select>
  );
};

// 연령대 선택 콤보박스
export const AgeRangeInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Select
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    >
      <option value={"선택"} selected>
        선택
      </option>
      <option value={"0~9"}>0~9</option>
      <option value={"10~19"}>10~19</option>
      <option value={"20~29"}>20~29</option>
      <option value={"30~39"}>30~39</option>
      <option value={"40~49"}>40~49</option>
      <option value={"50~59"}>50~59</option>
      <option value={"60~69"}>60~69</option>
      <option value={"70~79"}>70~79</option>
      <option value={"80~89"}>80~89</option>
      <option value={"90~99"}>90~99</option>
    </Select>
  );
};

// '게시판 페이지' 내부의 게시글 정렬 방식 선택 콤보박스
export const SortPostInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Select
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    >
      <option value={"createdAt"}>최신 순</option>
      <option value={"views"}>조회수 순</option>
      <option value={"likes"}>추천 순</option>
    </Select>
  );
};

// '카테고리' 선택 콤보박스
export const CategoryInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Select
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    >
      <option value={"선택"} selected>
        선택
      </option>
      <option value={"자유"}>자유</option>
      <option value={"해외축구"}>해외축구</option>
      <option value={"국내축구"}>국내축구</option>
      <option value={"직관모임"}>직관모임</option>
    </Select>
  );
};

/* --------------------------------------------------------------- */

// 프로필 이미지 선택 버튼
export const ProfileInput = ({ src, handleProfileClick }: ProfileInputType) => {
  return (
    <Profile src={src} onClick={handleProfileClick}>
      <LuRefreshCcw size={"30"} color="darkgray" />
    </Profile>
  );
};

// 게시글 이미지 선택 버튼
export const PostImageInput = ({
  src,
  handlePostImageClick,
}: PostImageInputType) => {
  return (
    <PostImage src={src} onClick={handlePostImageClick}>
      <LuRefreshCcw size={"30"} color="darkgray" />
    </PostImage>
  );
};

/* --------------------------------------------------------------- */

// 게시글 검색창
export const SearchPost = ({
  value,
  setValue,
  handleGetPosts,
}: SearchPostType) => {
  return (
    <div style={{ position: "relative" }}>
      <SearchContainer
        value={value}
        onChange={(e) => {
          if (setValue) {
            setValue(e.target.value);
          }
        }}
      />
      <MdSearch
        size={15}
        style={{
          position: "absolute",
          top: "0.4rem",
          right: "0.5rem",
          cursor: "pointer",
        }}
        onClick={handleGetPosts}
      />
    </div>
  );
};

// 댓글 입력창
export const CommentInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <CommentInputContainer
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    />
  );
};
