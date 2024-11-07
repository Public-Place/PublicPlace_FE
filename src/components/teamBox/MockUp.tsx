export interface Team {
  teamName: string;
  createdAt: string;
  location: string;
  memberCount: number; // 숫자 타입으로 정의
}

export interface TeamBoxType {
  team: Team;
}

export const team01: Team = {
  teamName: "울산",
  createdAt: "1983년 12월 6일",
  location: "울산광역시 남구 문수로 44",
  memberCount: 32,
};

export const team02: Team = {
  teamName: "강원",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team03: Team = {
  teamName: "김천",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team04: Team = {
  teamName: "서울",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team05: Team = {
  teamName: "포항",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team06: Team = {
  teamName: "수원FC",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team07: Team = {
  teamName: "제주",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team08: Team = {
  teamName: "광주",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team09: Team = {
  teamName: "대전",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team10: Team = {
  teamName: "대구",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team11: Team = {
  teamName: "전북",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};

export const team12: Team = {
  teamName: "인천",
  createdAt: "2024년 11월 5일",
  location: "경기도 용인시 기흥구 서천서로 27",
  memberCount: 48,
};
