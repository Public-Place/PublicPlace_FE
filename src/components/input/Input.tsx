import {
  Email,
  Select,
  Name,
  NickName,
  Password,
  PasswordCheck,
  Tel,
} from "./styles";

export const EmailInput = () => {
  return <Email />;
};

export const PasswordInput = () => {
  return <Password />;
};

export const PasswordCheckInput = () => {
  return <PasswordCheck />;
};

export const NameInput = () => {
  return <Name />;
};

export const NickNameInput = () => {
  return <NickName />;
};

export const TelInput = () => {
  return <Tel />;
};

export const GenderInput = () => {
  return (
    <Select>
      <option value={0} selected>
        선택
      </option>
      <option value={1}>남자</option>
      <option value={2}>여자</option>
    </Select>
  );
};

export const FootInput = () => {
  return (
    <Select>
      <option value={0} selected>
        선택
      </option>
      <option value={1}>왼발</option>
      <option value={2}>오른발</option>
    </Select>
  );
};

export const PositionInput = () => {
  return (
    <Select>
      <option value={0} selected>
        선택
      </option>
      <option value={1}>스트라이커</option>
      <option value={2}>윙어</option>
      <option value={3}>공격형 미드필더</option>
      <option value={4}>중앙 미드필더</option>
      <option value={5}>수비형 미드필더</option>
      <option value={6}>사이드백</option>
      <option value={7}>센터백</option>
      <option value={8}>골키퍼</option>
    </Select>
  );
};

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

// 일 선택 옵션 생성
const generateDayOptions = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  return days;
};

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

export const MonthInput = () => {
  return (
    <Select>
      <option value={0} selected>
        선택
      </option>
      <option value={1}>01월</option>
      <option value={2}>02월</option>
      <option value={3}>03월</option>
      <option value={4}>04월</option>
      <option value={5}>05월</option>
      <option value={6}>06월</option>
      <option value={7}>07월</option>
      <option value={8}>08월</option>
      <option value={9}>09월</option>
      <option value={10}>10월</option>
      <option value={11}>11월</option>
      <option value={12}>12월</option>
    </Select>
  );
};

export const DayInput = () => {
  return (
    <Select>
      <option value={0} selected>
        선택
      </option>
      {generateDayOptions().map((day) => (
        <option key={day} value={day}>
          {day}
        </option>
      ))}
    </Select>
  );
};
