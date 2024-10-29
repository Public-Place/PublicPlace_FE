import { useEffect, useState } from "react";
import { GreenBtn, RedBtn } from "../../components/button/Button";
import { IntroduceMe, TeamNameInput } from "../../components/input/Input";
import { InputTitle, PageCenterText } from "../../components/text/Text";
import { Advertisement, Container, Wrapper } from "../post/styles";
import { TeamInformation, TeamName } from "../team/styles";
import { JoinInfoBox } from "./styles";
import { useLocation } from "react-router-dom";
import { useJoinTeamEvent } from "./events";

export function JoinTeam() {
  const [isJoinTeam, setIsJoinTeam] = useState<boolean>();

  const location = useLocation();
  const { teamId, requestId } = location.state;

  const {
    userInfo,
    handleGetUserInfo,
    introduce,
    setIntroduce,
    handleClickJoinBtn,
    joinUser,
    handleGetJoinUserInfo,
    handleClickApproveBtn,
    handleClickRejectBtn,
  } = useJoinTeamEvent();

  useEffect(() => {
    if (teamId) {
      setIsJoinTeam(true);
      handleGetUserInfo();
    } else if (requestId) {
      setIsJoinTeam(false);
      handleGetJoinUserInfo(requestId);
    }
  }, []);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <PageCenterText text={isJoinTeam ? "팀 가입하기" : "팀 가입 지원서"} />
        <TeamName>
          <InputTitle text={"신청자 이름"} />
          <TeamNameInput
            value={isJoinTeam ? userInfo?.name : joinUser?.userName}
            setValue={() => {}}
          />
        </TeamName>
        <TeamInformation>
          <JoinInfoBox width="15%">
            <InputTitle text={"성별"} />
            <TeamNameInput
              value={isJoinTeam ? userInfo?.gender : joinUser?.userGender}
              setValue={() => {}}
            />
          </JoinInfoBox>
          <JoinInfoBox width="15%">
            <InputTitle text={"연령대"} />
            <TeamNameInput
              value={isJoinTeam ? userInfo?.ageRange : joinUser?.userAgeRange}
              setValue={() => {}}
            />
          </JoinInfoBox>
          <JoinInfoBox width="15%">
            <InputTitle text={"주발"} />
            <TeamNameInput
              value={isJoinTeam ? userInfo?.foot : joinUser?.foot}
              setValue={() => {}}
            />
          </JoinInfoBox>
          <JoinInfoBox width="20%">
            <InputTitle text={"선호 포지션"} />
            <TeamNameInput
              value={isJoinTeam ? userInfo?.position : joinUser?.position}
              setValue={() => {}}
            />
          </JoinInfoBox>
          <JoinInfoBox width="35%">
            <InputTitle text={"전화번호"} />
            <TeamNameInput
              value={
                isJoinTeam ? userInfo?.phoneNumber : joinUser?.userPhoneNumber
              }
              setValue={() => {}}
            />
          </JoinInfoBox>
        </TeamInformation>
        <hr style={{ width: "100%", marginBlock: "2rem" }} />
        <JoinInfoBox width="100%">
          <InputTitle text={"자기 소개"} />
          <IntroduceMe
            value={isJoinTeam ? introduce : joinUser?.joinReason}
            setValue={setIntroduce}
          />
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
          {isJoinTeam ? (
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
              <RedBtn
                text="거절"
                onClick={() =>
                  joinUser && handleClickRejectBtn(joinUser.requestId)
                }
              />
              <GreenBtn
                text="승인"
                onClick={() =>
                  joinUser && handleClickApproveBtn(joinUser.requestId)
                }
              />
            </div>
          )}
        </div>
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
}
