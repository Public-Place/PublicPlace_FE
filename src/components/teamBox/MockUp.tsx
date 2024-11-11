import Suwon from "../../assets/images/Suwon.png";
import Seoul from "../../assets/images/Seoul.png";
import Jeonbuk from "../../assets/images/Jeonbuk.png";
import Pohang from "../../assets/images/Pohang.png";
import Jeju from "../../assets/images/Jeju.png";
import Anyang from "../../assets/images/Anyang.png";
import Ulsan from "../../assets/images/Ulsan.png";
import Incheon from "../../assets/images/Incheon.png";
import SuwonFC from "../../assets/images/SuwonFC.png";
import Daegu from "../../assets/images/Daegu.png";
import Busan from "../../assets/images/Busan.png";
import Gangwon from "../../assets/images/Gangwon.png";

export interface Team {
  teamImg: any;
  teamName: string;
  createdAt: string;
  location: string;
  memberCount: number; // 숫자 타입으로 정의
}

export interface TeamBoxType {
  team: Team;
}

export const team01: Team = {
  teamName: "수원삼성블루윙즈",
  createdAt: "1995년 12월 15일",
  location: "경기도 수원시 팔달구 월드컵로 310",
  memberCount: 43,
  teamImg: Suwon,
};

export const team02: Team = {
  teamName: "FC서울",
  createdAt: "1983년 12월 22일",
  location: "서울특별시 마포구 월드컵로 240",
  memberCount: 66,
  teamImg: Seoul,
};

export const team03: Team = {
  teamName: "전북현대모터스",
  createdAt: "1994년 12월 12일",
  location: "전북특별자치도 전주시 덕진구 기린대로 1055",
  memberCount: 34,
  teamImg: Jeonbuk,
};

export const team04: Team = {
  teamName: "포항스틸러스",
  createdAt: "1973년 4월 1일",
  location: "경상북도 포항시 남구 동해안로 6213번길 20",
  memberCount: 14,
  teamImg: Pohang,
};

export const team05: Team = {
  teamName: "제주유나이티드",
  createdAt: "1982년 12월 17일",
  location: "제주특별자치도 서귀포시 월드컵로 33",
  memberCount: 29,
  teamImg: Jeju,
};

export const team06: Team = {
  teamName: "FC안양",
  createdAt: "2013년 2월 2일",
  location: "경기도 안양시 동안구 평촌대로 389",
  memberCount: 17,
  teamImg: Anyang,
};

export const team07: Team = {
  teamName: "울산현대",
  createdAt: "1983년 12월 6일",
  location: "울산광역시 남구 문수로 44",
  memberCount: 37,
  teamImg: Ulsan,
};

export const team08: Team = {
  teamName: "인천유나이티드",
  createdAt: "2003년 12월 30일",
  location: "인천광역시 중구 참외전로 246",
  memberCount: 18,
  teamImg: Incheon,
};

export const team09: Team = {
  teamName: "수원FC",
  createdAt: "2003년 3월 15일",
  location: "경기도 수원시 장안구 경수대로 893",
  memberCount: 11,
  teamImg: SuwonFC,
};

export const team10: Team = {
  teamName: "대구FC",
  createdAt: "2002년 10월 9일",
  location: "대구광역시 북구 고성로 191",
  memberCount: 12,
  teamImg: Daegu,
};

export const team11: Team = {
  teamName: "부산아이파크",
  createdAt: "1979년 11월 22일",
  location: "부산광역시 연제구 월드컵대로 344",
  memberCount: 53,
  teamImg: Busan,
};

export const team12: Team = {
  teamName: "강원FC",
  createdAt: "2008년 12월 18일",
  location: "강원특별자치도 강릉시 종합운동장길 69",
  memberCount: 21,
  teamImg: Gangwon,
};
