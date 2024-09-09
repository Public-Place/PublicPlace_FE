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
  const { user, GetUserInfo } = useMyInfoEvent();

  // 페이지 렌더링 시 회원정보 조회
  useEffect(() => {
    GetUserInfo();
  }, []);

  // user 상태 변화 시 콘솔 로그 출력
  useEffect(() => {
    console.log("qwe", user);
  }, [user]);

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
                    width: "60%",
                    minWidth: "5rem",
                    height: "60%",
                    minHeight: "5rem",
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
            {user ? (
              <UserInfoText text={"주발 : " + user.foot} />
            ) : (
              <div>
                <ClipLoader size={"1rem"} color="white" />
              </div>
            )}
            {user ? (
              <UserInfoText text={"선호 포지션 : " + user.position} />
            ) : (
              <div>
                <ClipLoader size={"1rem"} color="white" />
              </div>
            )}
          </UserSubInfo>
          <Notice>※ 팀 탈퇴는 해당 팀을 클릭하여 진행 부탁드립니다.</Notice>
        </UserInfoArea>
        <TeamInfoArea>
          <TeamStateArea>
            <TeamStateText text={"소속 팀"} />
            <TeamSortArea>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "4rem",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.3rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"평균 연령층 : 20~29 | 36명"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
            </TeamSortArea>
          </TeamStateArea>
          <hr style={{ width: "100%" }} />
          <TeamStateArea>
            <TeamStateText text={"가입 신청 팀"} />
            <TeamSortArea>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "4rem",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.3rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"평균 연령층 : 20~29 | 36명"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
            </TeamSortArea>
          </TeamStateArea>
        </TeamInfoArea>
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
}
