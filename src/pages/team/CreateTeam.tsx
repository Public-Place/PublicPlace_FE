import { useEffect } from "react";
import {
  BasicBtn,
  ErrorBtn,
  GreenBtn,
  SuccessBtn,
} from "../../components/button/Button";
import {
  TeamActivityDayInput,
  TeamImageInput,
  TeamIntroduceInput,
  TeamNameInput,
  TeamStadiumInput,
} from "../../components/input/Input";
import KakaoMap from "../../components/map/KakaoMap";
import { InputTitle, PageCenterText } from "../../components/text/Text";
import { Advertisement, Container, Wrapper } from "../post/styles";
import { useCreateTeamEvent } from "./events";
import {
  TeamActivityDay,
  TeamInformation,
  TeamIntroduceBox,
  TeamName,
  TeamStadium,
} from "./styles";

export default function CreateTeam() {
  const {
    teamName,
    setTeamName,
    teamIntroduce,
    setTeamIntroduce,
    teamFirstActDay,
    setTeamFirstActDay,
    teamSecondActDay,
    setTeamSecondActDay,
    activityAddr,
    activityLat,
    activityLng,
    handleAddressChange,
    handleSetLatLng,
    handleClickCreateTeam,
    teamImage,
    teamImageRef,
    handleFileChange,
    handleTeamImageClick,
    teamNameSuccess,
    teamNameMsg,
    handleCheckTeamName,
    getNickNameMsgColor,
  } = useCreateTeamEvent();

  useEffect(() => {
    setTeamFirstActDay("선택");
  }, []);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <PageCenterText text={"새 팀 생성 "} />
        <TeamName>
          <InputTitle
            text={"팀 이름"}
            msg={teamNameMsg || "※ 중복 여부를 확인해주세요"}
            msgColor={getNickNameMsgColor()}
          />
          <div onClick={() => handleCheckTeamName({ value: teamName })}>
            {teamNameSuccess === true ? (
              <SuccessBtn />
            ) : teamNameSuccess === false ? (
              <ErrorBtn />
            ) : (
              <BasicBtn />
            )}
          </div>
          <TeamNameInput value={teamName} setValue={setTeamName} />
        </TeamName>
        <TeamInformation>
          <TeamIntroduceBox>
            <InputTitle text={"팀 한 줄 소개"} />
            <TeamIntroduceInput
              value={teamIntroduce}
              setValue={setTeamIntroduce}
            />
          </TeamIntroduceBox>
          <TeamActivityDay>
            <InputTitle text={"팀 활동 요일"} />
            <div
              style={{
                width: "100%",
                height: "4rem",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <TeamActivityDayInput
                value={teamFirstActDay}
                setValue={setTeamFirstActDay}
              />
              {teamFirstActDay === "선택"
                ? false
                : true && (
                    <TeamActivityDayInput
                      value={teamSecondActDay}
                      setValue={setTeamSecondActDay}
                    />
                  )}
            </div>
          </TeamActivityDay>
        </TeamInformation>
        <hr style={{ width: "100%", marginTop: "2rem" }} />
        <TeamInformation>
          <TeamStadium>
            <InputTitle text={"팀 활동 장소"} />
            <TeamStadiumInput value={activityAddr} />
            <div style={{ width: "100%", height: "1rem" }}>{/* 간격 */}</div>
            <KakaoMap
              handleAddressChange={handleAddressChange}
              handleSetLatLng={handleSetLatLng}
              Lat={activityLat}
              Lng={activityLng}
            />
          </TeamStadium>
          <TeamStadium>
            <InputTitle text={"팀 대표 이미지"} />
            <TeamImageInput
              src={teamImage}
              handleProfileClick={handleTeamImageClick}
            />
            <input
              type="file"
              style={{ display: "none" }}
              ref={teamImageRef}
              onChange={handleFileChange}
              accept="image/*"
            />
          </TeamStadium>
        </TeamInformation>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <GreenBtn text={"팀 생성하기"} onClick={handleClickCreateTeam} />
        </div>
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
}
