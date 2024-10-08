import {
  LeftMiddleText,
  LeftSmallText,
  PageCenterText,
} from "../../components/text/Text";
import {
  EditTeamBox,
  EditTeamBtn,
  LeftInfoBottom,
  LeftInfoTop,
  PostingDay,
  SideInfoBox,
  SideInfoLeft,
  SideInfoRight,
  TeamContainer,
  TeamPostBox,
  TeamPostComment,
  TeamPostContent,
  TeamPostImage,
  TeamPostWriter,
  Wrapper,
  WriterName,
  WriterProfileImg,
} from "./styles";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { LuPencilLine } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";
import KakaoMap from "../../components/map/KakaoMap";
import { SearchPost } from "../../components/input/Input";
import DefaultProfile from "../../assets/images/Profile.png";
import BackGround from "../../assets/images/background.png";
import { AiOutlineComment } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTeamEvent } from "./events";
import { BarCharts } from "../../components/recharts/Recharts";

export const Team = () => {
  const location = useLocation();
  const teamId = location.state;

  const {
    team,
    handleGetTeam,
    dayToKorean,
    handleExtractAgeRange,
    age10,
    age20,
    age30,
    age40,
    age50,
    ageEtc,
  } = useTeamEvent();

  useEffect(() => {
    handleGetTeam(teamId);
  }, []);

  useEffect(() => {
    if (team) {
      // 팀 회원 연령대 집계
      handleExtractAgeRange({ team });
    }
  }, [team]);

  useEffect(() => {
    if (age10 || age20 || age30 || age40 || age50 || ageEtc) {
      // console.log("age10 : ", age10);
      // console.log("age20 : ", age20);
      // console.log("age30 : ", age30);
      // console.log("age40 : ", age40);
      // console.log("age50 : ", age50);
      // console.log("ageEtc : ", ageEtc);
    }
  }, [age10, age20, age30, age40, age50, ageEtc]);

  // BarCharts로 넘겨줘야하는 연령대 데이터
  const ageData = [age10, age20, age30, age40, age50, ageEtc];

  return (
    <TeamContainer>
      <SideInfoLeft>
        <LeftInfoTop>
          <img
            src={team?.teamImg}
            alt={"Error"}
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid white",
              borderRadius: "1rem",
              objectFit: "contain",
            }}
          />
        </LeftInfoTop>
        <LeftInfoBottom>
          <LeftMiddleText text={team?.teamName} />
          <LeftSmallText text={`총원 ${team?.members.length}명`} />
          <LeftSmallText text={`"${team?.teamInfo}"`} />
          <hr
            style={{
              width: "100%",
              marginBlock: "1rem",
            }}
          />
          <EditTeamBox>
            <EditTeamBtn>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <IoSettingsOutline />
                <LeftSmallText text="팀 정보 수정" />
              </div>
            </EditTeamBtn>
            <EditTeamBtn>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <CiSquarePlus />
                <LeftSmallText text="팀 가입하기" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <LuPencilLine />
                <LeftSmallText text="게시글 작성" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <LuUserPlus />
                <LeftSmallText text="가입 요청" />
              </div>
            </EditTeamBtn>
          </EditTeamBox>
        </LeftInfoBottom>
      </SideInfoLeft>
      <Wrapper>
        <PageCenterText text={"팀 게시글"} />
        <SearchPost placeholder={"게시글 내용을 검색하세요."} />
        <div
          style={{
            height: "1.5rem",
          }}
        ></div>
        <TeamPostBox>
          <TeamPostWriter>
            <WriterProfileImg>
              <img
                src={DefaultProfile}
                alt="Error"
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
              />
            </WriterProfileImg>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                flexDirection: "column",
                marginLeft: "1rem",
                backgroundColor: "transparent",
                gap: "0.2rem",
              }}
            >
              <WriterName>염기훈</WriterName>
              <PostingDay>2024년</PostingDay>
            </div>
          </TeamPostWriter>
          <TeamPostContent>
            [오피셜] 염기훈 감독대행, 제 9대 수원삼성 감독 선임
            <br />
            수원삼성블루윙즈 축구단이 염기훈 감독을 제 9대 수원삼성 감독으로
            선임했습니다.
            <br />
            염기훈 감독 소감 : 어려운 상황이지만 우리 팬들이 있는 한 무거운
            책임감으로 K리그1 재진입이라는 목표를 향해 달려가겠습니다.
          </TeamPostContent>
          <TeamPostImage>
            <img
              src={BackGround}
              alt="Error"
              style={{
                width: "100%",
                height: "fit-content",
                objectFit: "cover",
              }}
            />
          </TeamPostImage>
          <TeamPostComment>
            <AiOutlineComment size={20} />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              336
            </span>
          </TeamPostComment>
        </TeamPostBox>
      </Wrapper>
      <SideInfoRight>
        <SideInfoBox>
          <LeftMiddleText text={"팀 정보"} />
          <LeftSmallText
            text={`회장 : ${
              team?.members.find((member) => member.role === "회장")?.name
            }`}
          />
          <LeftSmallText
            text={`창단일 : ${
              team?.createdAt
                ? `${new Date(team.createdAt).getFullYear()}년 ${String(
                    new Date(team.createdAt).getMonth() + 1
                  ).padStart(2, "0")}월 ${String(
                    new Date(team.createdAt).getDate()
                  ).padStart(2, "0")}일`
                : "정보 없음"
            }`}
          />
          <LeftSmallText
            text={`활동 요일 : ${team?.activityDays
              .map((day) => dayToKorean(day))
              .join(", ")}`}
          />
        </SideInfoBox>
        <SideInfoBox>
          <LeftMiddleText text={"팀원 나이 분포도"} />
          <div
            style={{
              width: "100%",
              height: "15rem",
              border: "1px solid white",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <BarCharts ageData={ageData} />
          </div>
        </SideInfoBox>
        <SideInfoBox>
          <LeftMiddleText text={"팀 활동 장소"} />
          <KakaoMap handler={() => {}} />
        </SideInfoBox>
      </SideInfoRight>
    </TeamContainer>
  );
};
