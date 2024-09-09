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
import DefaultProfile from "../../assets/images/DefaultProfile.png";
import BackGround from "../../assets/images/background.png";

export default function MyInfo() {
  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <UserInfoArea>
          <UserMainInfo>
            <UserProfileArea>
              <img
                src={DefaultProfile}
                alt="Profile"
                style={{
                  width: "60%",
                  height: "60%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "1px solid white",
                }}
              />
            </UserProfileArea>
            <UserNameArea>
              <UserName>염기훈</UserName>
              <UserInfoText text={"(염두광)"} />
            </UserNameArea>
          </UserMainInfo>
          <UserSubInfo>
            <UserInfoText text={"연령대 : 30~39"} />
            <UserInfoText text={"성별 : 남"} />
            <UserInfoText text={"주발 : 왼발"} />
            <UserInfoText text={"선호 포지션 : 윙어"} />
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
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
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
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
                  <TeamDetailText text={"경기도 수원시 팔달구 월드컵로"} />
                </div>
              </TeamBox>
              <TeamBox>
                <img
                  src={BackGround}
                  alt="TeamImage"
                  style={{
                    width: "100%",
                    height: "fit-content",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ paddingLeft: "0.2rem" }}>
                  <TeamNameText text={"수원삼성블루윙즈"} />
                  <TeamDetailText text={"95년 12월 12일 창단"} />
                  <TeamDetailText text={"36명 | 20~29대 위주 팀"} />
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
