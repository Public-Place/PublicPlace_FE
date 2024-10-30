import { SearchPost } from "../input/Input";
import { Container, TeamListHeader, TeamListUp, TeamName } from "./styles";

export const TeamList = () => {
  return (
    <Container>
      <TeamListHeader>팀 리스트</TeamListHeader>
      <SearchPost value="" setValue={() => {}} placeholder="" radius="0.5rem" />
      <TeamListUp>
        <TeamName>안양FC</TeamName>
        <TeamName>충남아산</TeamName>
        <TeamName>서울이랜드</TeamName>
        <TeamName>전남 드래곤즈</TeamName>
        <TeamName>부산아이파크</TeamName>
        <TeamName>수원삼성</TeamName>
        <TeamName>부천FC</TeamName>
        <TeamName>김포FC</TeamName>
        <TeamName>천안시티</TeamName>
        <TeamName>안산그리너스</TeamName>
        <TeamName>경남FC</TeamName>
        <TeamName>성남FC</TeamName>
        <TeamName>부산</TeamName>
        <TeamName>수원</TeamName>
        <TeamName>부천</TeamName>
        <TeamName>김포</TeamName>
        <TeamName>매원FC</TeamName>
        <TeamName>신성FC</TeamName>
        <TeamName>강남대학교 공대</TeamName>
        <TeamName>매탄고등학교</TeamName>
        <TeamName>오산고등학교</TeamName>
        <TeamName>현대고등학교</TeamName>
      </TeamListUp>
    </Container>
  );
};
