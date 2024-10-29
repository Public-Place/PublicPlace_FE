import { useEffect } from "react";
import { GreenBtn, RedBtn } from "../../components/button/Button";
import { IntroduceMe, TeamNameInput } from "../../components/input/Input";
import { InputTitle, PageCenterText } from "../../components/text/Text";
import { Advertisement, Container, Wrapper } from "../post/styles";
import { TeamInformation, TeamName } from "../team/styles";
import { JoinInfoBox } from "./styles";
import { useLocation } from "react-router-dom";
import { useJoinTeamEvent } from "./events";

export function JoinTeam() {
  // test state
  const user = true;

  const location = useLocation();
  const { teamId } = location.state;

  const {
    userInfo,
    handleGetUserInfo,
    introduce,
    setIntroduce,
    handleClickJoinBtn,
  } = useJoinTeamEvent();

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <PageCenterText text={user ? "팀 가입하기" : "팀 가입 지원서"} />
        <TeamName>
          <InputTitle text={"신청자 이름"} />
          <TeamNameInput value={userInfo?.name} setValue={() => {}} />
        </TeamName>
        <TeamInformation>
          <JoinInfoBox width="15%">
            <InputTitle text={"성별"} />
            <TeamNameInput value={userInfo?.gender} setValue={() => {}} />
          </JoinInfoBox>
          <JoinInfoBox width="15%">
            <InputTitle text={"연령대"} />
            <TeamNameInput value={userInfo?.ageRange} setValue={() => {}} />
          </JoinInfoBox>
          <JoinInfoBox width="15%">
            <InputTitle text={"주발"} />
            <TeamNameInput value={userInfo?.foot} setValue={() => {}} />
          </JoinInfoBox>
          <JoinInfoBox width="20%">
            <InputTitle text={"선호 포지션"} />
            <TeamNameInput value={userInfo?.position} setValue={() => {}} />
          </JoinInfoBox>
          <JoinInfoBox width="35%">
            <InputTitle text={"전화번호"} />
            <TeamNameInput value={userInfo?.phoneNumber} setValue={() => {}} />
          </JoinInfoBox>
        </TeamInformation>
        <hr style={{ width: "100%", marginBlock: "2rem" }} />
        <JoinInfoBox width="100%">
          <InputTitle text={"자기 소개"} />
          <IntroduceMe value={introduce} setValue={setIntroduce} />
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
            <GreenBtn
              text="가입하기"
              onClick={() => handleClickJoinBtn(teamId)}
            />
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
