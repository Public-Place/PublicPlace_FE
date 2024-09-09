import { Notice, UserName } from "../../components/text/styles";
import {
  TeamDetailText,
  TeamNameText,
  TeamStateText,
  UserInfoText,
} from "../../components/text/Text";
import {
  Advertisement,
  TeamStateArea,
  Container,
  TeamInfoArea,
  UserInfoArea,
  UserMainInfo,
  UserNameArea,
  UserProfileArea,
  UserSubInfo,
  Wrapper,
  TeamSortArea,
  TeamBox,
} from "./styles";
import BackGround from "../../assets/images/background.png";
import { useEffect } from "react";
import { useMyInfoEvent } from "./events";
import { ClipLoader } from "react-spinners";

export default function MyInfo() {
  const {
    user,
    GetUserInfo,
    appliedTeams,
    GetAppliedTeamsInfo,
    joinedTeams,
    GetJoinedTeamsInfo,
  } = useMyInfoEvent();

  // 페이지 렌더링 시 회원 정보 & 소속 팀 정보 & 가입 신청 팀 정보 조회
  useEffect(() => {
    GetUserInfo();
    GetAppliedTeamsInfo();
    GetJoinedTeamsInfo();
  }, []);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <UserInfoArea>
          <UserMainInfo>
            <UserProfileArea>
              {user ? (
                <img
                  src={user?.profileImg}
                  alt="Profile"
                  style={{
                    width: "5rem",
                    height: "5rem",
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "1px solid white",
                  }}
                />
              ) : (
                <ClipLoader size={"1rem"} color="white" />
              )}
            </UserProfileArea>
            <UserNameArea>
              {user ? (
                <>
                  <UserName>{user.name}</UserName>
                  <UserInfoText text={"(" + user.nickname + ")"} />
                </>
              ) : (
                <>
                  <UserName>
                    <ClipLoader size={"1rem"} color="white" />
                  </UserName>
                  <ClipLoader size={"1rem"} color="white" />
                </>
              )}
            </UserNameArea>
          </UserMainInfo>
          <UserSubInfo>
            {user ? (
              <UserInfoText text={"연령대 : " + user.ageRange} />
            ) : (
              <div>
                <ClipLoader size={"1rem"} color="white" />
              </div>
            )}
            {user ? (
              <UserInfoText text={"성별 : " + user.gender} />
            ) : (
              <div>
                <ClipLoader size={"1rem"} color="white" />
              </div>
            )}
            {user?.foot ? (
              <UserInfoText text={"주발 : " + user.foot} />
            ) : (
              <UserInfoText text={"주발 : 미입력"} />
            )}
            {user?.position ? (
              <UserInfoText text={"선호 포지션 : " + user.position} />
            ) : (
              <UserInfoText text={"선호 포지션 : 미입력"} />
            )}
          </UserSubInfo>
          <Notice>※ 팀 탈퇴는 해당 팀을 클릭하여 진행 부탁드립니다.</Notice>
        </UserInfoArea>
        <TeamInfoArea>
          <TeamStateArea>
            <TeamStateText text={"소속 팀"} />
            <TeamSortArea>
              {joinedTeams && joinedTeams.length > 0 ? (
                joinedTeams.map((joinedTeam, index) => (
                  <TeamBox key={index}>
                    <img
                      src={joinedTeam.teamImg}
                      alt="TeamImage"
                      style={{
                        width: "100%",
                        height: "4rem",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                        border: "1px solid black",
                      }}
                    />
                    <div style={{ paddingLeft: "0.3rem" }}>
                      <TeamNameText text={joinedTeam.teamName} />
                      <TeamDetailText
                        text={
                          "창단일: " + joinedTeam.teamCreationDate.split("T")[0]
                        }
                      />
                      <TeamDetailText
                        text={"팀원 수 : " + joinedTeam.teamMembers + "명"}
                      />
                      <TeamDetailText
                        text={"위치 : " + joinedTeam.teamLocation}
                      />
                    </div>
                  </TeamBox>
                ))
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "fit-content",

                    padding: "5rem 0rem",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    fontSize: "0.7rem",
                    color: "white",
                  }}
                >
                  소속 팀이 없습니다.
                </div>
              )}
            </TeamSortArea>
          </TeamStateArea>
          <hr style={{ width: "100%" }} />
          <TeamStateArea>
            <TeamStateText text={"가입 신청 팀"} />
            <TeamSortArea>
              {appliedTeams && appliedTeams.length > 0 ? (
                appliedTeams.map((appliedTeam, index) => (
                  <TeamBox key={index}>
                    <img
                      src={appliedTeam.teamImg}
                      alt="TeamImage"
                      style={{
                        width: "100%",
                        height: "4rem",
                        objectFit: "cover",
                        borderRadius: "0.5rem",
                        border: "1px solid black",
                      }}
                    />
                    <div style={{ paddingLeft: "0.3rem" }}>
                      <TeamNameText text={appliedTeam.teamName} />
                      <TeamDetailText
                        text={
                          "창단일: " +
                          appliedTeam.teamCreationDate.split("T")[0]
                        }
                      />
                      <TeamDetailText
                        text={"팀원 수 : " + appliedTeam.teamMembers + "명"}
                      />
                      <TeamDetailText
                        text={"위치 : " + appliedTeam.teamLocation}
                      />
                    </div>
                  </TeamBox>
                ))
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "fit-content",

                    padding: "5rem 0rem",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    fontSize: "0.7rem",
                    color: "white",
                  }}
                >
                  가입 신청 팀이 없습니다.
                </div>
              )}
            </TeamSortArea>
          </TeamStateArea>
        </TeamInfoArea>
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
}
