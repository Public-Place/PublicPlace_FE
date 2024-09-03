import {
  Email,
  Select,
  Name,
  NickName,
  Password,
  PasswordCheck,
  Tel,
} from "./styles";
import { SignUpInputType } from "./types";

/* --------------------------------------------------------------- */

// 이메일 입력창
export const EmailInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Email
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 비밀번호 입력창
export const PasswordInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Password
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 비밀번호 확인 입력창
export const PasswordCheckInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <PasswordCheck
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 이름 입력창
export const NameInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Name
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 닉네임 입력창
export const NickNameInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <NickName
      value={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.target.value);
        }
      }}
    />
  );
};

// 전화번호 입력창
export const TelInput = ({ value, setValue }: SignUpInputType) => {
  return (
    <Tel
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
      <option value={0} selected>
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
      <option value={0} selected>
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
      <option value={0} selected>
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
      <option value={0} selected>
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

/* --------------------------------------------------------------- */

// 현재 연도 구하기
const currentYear = new Date().getFullYear();

// 연도 선택 옵션 생성
const generateYearOptions = () => {
  const years = [];
  for (let i = currentYear; i >= currentYear - 100; i--) {
    years.push(i);
  }
  return years;
};

// 연도 선택 콤보박스
export const YearInput = () => {
  return (
    <Select>
      <option value={0} selected>
        선택
      </option>
      {generateYearOptions().map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </Select>
  );
};

// 월 선택 콤보박스
export const MonthInput = () => {
  return (
    <Select>
      <option value={0} selected>
        선택
      </option>
      <option value={1}>01</option>
      <option value={2}>02</option>
      <option value={3}>03</option>
      <option value={4}>04</option>
      <option value={5}>05</option>
      <option value={6}>06</option>
      <option value={7}>07</option>
      <option value={8}>08</option>
      <option value={9}>09</option>
      <option value={10}>10</option>
      <option value={11}>11</option>
      <option value={12}>12</option>
    </Select>
  );
};

// 일 선택 콤보박스
export const DayInput = () => {
  return (
    <Select>
      <option value={0} selected>
        선택
      </option>
      <option value={1}>01</option>
      <option value={2}>02</option>
      <option value={3}>03</option>
      <option value={4}>04</option>
      <option value={5}>05</option>
      <option value={6}>06</option>
      <option value={7}>07</option>
      <option value={8}>08</option>
      <option value={9}>09</option>
      <option value={10}>10</option>
      <option value={11}>11</option>
      <option value={12}>12</option>
      <option value={13}>13</option>
      <option value={14}>14</option>
      <option value={15}>15</option>
      <option value={16}>16</option>
      <option value={17}>17</option>
      <option value={18}>18</option>
      <option value={19}>19</option>
      <option value={20}>20</option>
      <option value={21}>21</option>
      <option value={22}>22</option>
      <option value={23}>23</option>
      <option value={24}>24</option>
      <option value={25}>25</option>
      <option value={26}>26</option>
      <option value={27}>27</option>
      <option value={28}>28</option>
      <option value={29}>29</option>
      <option value={30}>30</option>
      <option value={31}>31</option>
    </Select>
  );
};

/* --------------------------------------------------------------- */
