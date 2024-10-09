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
import { AiOutlineComment } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTeamEvent } from "./events";
import { BarCharts } from "../../components/recharts/Recharts";
import { NoDataBtn } from "../../components/button/Button";

export const Team = () => {
  const location = useLocation();
  const teamId = location.state;

  const {
    team,
    handleGetTeam,
    dayToKorean,
    handleExtractAgeRange,
    ageData,
    teamLat,
    teamLng,
    setTeamLat,
    setTeamLng,
    isShow,
    teamPostList,
    handleGetTeamPostList,
    content,
    setContent,
  } = useTeamEvent();

  useEffect(() => {
    handleGetTeam(teamId);
  }, []);

  useEffect(() => {
    if (team) {
      // 팀 회원 연령대 집계
      handleExtractAgeRange({ team });

      // console.log(team.teamId);
      handleGetTeamPostList(team.teamId);

      setTeamLat(team.latitude);
      setTeamLng(team.longitude);
    }
  }, [team, content]);

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
              minHeight: "5rem",
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
        <SearchPost
          value={content}
          setValue={setContent}
          placeholder={"게시글 내용을 검색하세요."}
        />
        <div
          style={{
            height: "1.5rem",
          }}
        ></div>
        {teamPostList && teamPostList.length > 0 ? (
          teamPostList.map((post, index) => (
            <div key={index}>
              <TeamPostBox>
                <TeamPostWriter>
                  <WriterProfileImg>
                    <img
                      src={post.userProfileImage}
                      alt="Error"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                        border: "1px solid white",
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
                    <WriterName>{post.userName}</WriterName>
                    <PostingDay>
                      {post.createdDate
                        ? `${new Date(
                            post.createdDate
                          ).getFullYear()}년 ${String(
                            new Date(post.createdDate).getMonth() + 1
                          ).padStart(2, "0")}월 ${String(
                            new Date(post.createdDate).getDate()
                          ).padStart(2, "0")}일 ${String(
                            new Date(post.createdDate).getHours()
                          ).padStart(2, "0")}:${String(
                            new Date(post.createdDate).getMinutes()
                          ).padStart(2, "0")}`
                        : "정보 없음"}
                    </PostingDay>
                  </div>
                </TeamPostWriter>
                <TeamPostContent>{post.content}</TeamPostContent>
                <TeamPostImage>
                  <img
                    src={post.image}
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
                    {post.commentCount}
                  </span>
                </TeamPostComment>
              </TeamPostBox>
            </div>
          ))
        ) : (
          <div
            style={{
              width: "100%",
              height: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "transparent",
            }}
          >
            <NoDataBtn />
            <br />
            <strong>게시글이 존재하지 않습니다.</strong>
          </div>
        )}
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
          <KakaoMap Lat={teamLat} Lng={teamLng} isShow={isShow} />
        </SideInfoBox>
      </SideInfoRight>
    </TeamContainer>
  );
};
