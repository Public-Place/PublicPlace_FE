import { GreenBtn, RedBtn } from "../../components/button/Button";
import { IntroduceMe, TeamNameInput } from "../../components/input/Input";
import { InputTitle, PageCenterText } from "../../components/text/Text";
import { Advertisement, Container, Wrapper } from "../post/styles";
import { TeamInformation, TeamName } from "../team/styles";
import { JoinInfoBox } from "./styles";

export function JoinTeam() {
  const user = true;

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <PageCenterText text={user ? "팀 가입하기" : "팀 가입 지원서"} />
        <TeamName>
          <InputTitle text={"신청자 이름"} />
          <TeamNameInput value={"김영훈"} setValue={() => {}} />
        </TeamName>
        <TeamInformation>
          <JoinInfoBox width="25%">
            <InputTitle text={"성별"} />
            <TeamNameInput value={"남"} setValue={() => {}} />
          </JoinInfoBox>
          <JoinInfoBox width="30%">
            <InputTitle text={"연령대"} />
            <TeamNameInput value={"20~29"} setValue={() => {}} />
          </JoinInfoBox>
          <JoinInfoBox width="45%">
            <InputTitle text={"전화번호"} />
            <TeamNameInput value={"01040869454"} setValue={() => {}} />
          </JoinInfoBox>
        </TeamInformation>
        <hr style={{ width: "100%", marginBlock: "2rem" }} />
        <JoinInfoBox width="100%">
          <InputTitle text={"자기 소개"} />
          <IntroduceMe value={""} setValue={() => {}} />
        </JoinInfoBox>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          {user ? (
            <GreenBtn text="가입하기" />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <RedBtn text="거절" />
              <GreenBtn text="승인" />
            </div>
          )}
        </div>
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
}
