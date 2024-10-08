import { ChatBotBtn, GreenBtn } from "../../components/button/Button";
import {
  PageLeftText,
  TeamDetailText,
  TeamNameText,
  UserInfoText,
} from "../../components/text/Text";
import {
  Container,
  TeamBoxArea,
  TeamDetail,
  TeamFilter,
  TeamFilterLeft,
  TeamFilterRight,
  TeamImage,
  TeamInfo,
  TeamSort,
} from "./styles";
import TeamImg from "../../assets/images/TeamImg.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { TeamPaging } from "../../components/pagination/Paging";
import { SearchPost, TeamSortInput } from "../../components/input/Input";
import { TeamBox } from "../myinfo/styles";
import { useEffect } from "react";
import { useSearchTeamEvent } from "./events";
import { ClipLoader } from "react-spinners";

export default function SearchTeam() {
  const {
    randomTeam,
    handleGetTeamList,
    currentIndex,
    handlePrevTeam,
    handleNextTeam,
    sortBy,
    setSortBy,
    handleGetTeamSorted,
    teamName,
    setTeamName,
    currentTeams,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    handleGoToTeam,
  } = useSearchTeamEvent();

  useEffect(() => {
    handleGetTeamList();
    setSortBy("newest"); // 초기 정렬 방식 설정
  }, []);

  useEffect(() => {
    setCurrentPage(0);
    handleGetTeamSorted();
  }, [sortBy, teamName]);

  return (
    <Container>
      <TeamDetail>
        <FaAngleLeft
          size={"2rem"}
          style={{
            position: "absolute",
            left: "2rem",
            cursor: "pointer",
            zIndex: 9000,
          }}
          onClick={handlePrevTeam}
        />
        <FaAngleRight
          size={"2rem"}
          style={{ position: "absolute", right: "2rem", cursor: "pointer" }}
          onClick={handleNextTeam}
        />
        {randomTeam && randomTeam.length > 0 && (
          <TeamInfo>
            <PageLeftText
              text={randomTeam[currentIndex]?.teamName || "팀 이름"}
            />
            <UserInfoText
              text={`창단일: ${
                randomTeam[currentIndex]?.createdAt
                  ? `${new Date(
                      randomTeam[currentIndex].createdAt
                    ).getFullYear()}년 ${String(
                      new Date(randomTeam[currentIndex].createdAt).getMonth() +
                        1
                    ).padStart(2, "0")}월 ${String(
                      new Date(randomTeam[currentIndex].createdAt).getDate()
                    ).padStart(2, "0")}일`
                  : "정보 없음"
              }`}
            />
            <UserInfoText
              text={`팀원 수: ${
                randomTeam[currentIndex]?.members.length || "정보 없음"
              }명`}
            />
            <UserInfoText
              text={`위치: ${
                randomTeam[currentIndex]?.teamLocation || "정보 없음"
              }`}
            />
            <GreenBtn
              text={"팀 페이지로 이동"}
              onClick={() => handleGoToTeam(randomTeam[currentIndex]?.teamId)}
            />
            <TeamPaging currentIndex={currentIndex} />
          </TeamInfo>
        )}
        <TeamImage>
          {randomTeam && randomTeam.length > 0 && (
            <img
              src={randomTeam[currentIndex]?.teamImg}
              alt="Error"
              width={"100%"}
              height={"100%"}
              style={{
                borderBottomLeftRadius: "1rem",
                borderLeft: "1px solid white",
                borderBottom: "1px solid white",
                objectFit: "cover",
              }}
            />
          )}
        </TeamImage>
      </TeamDetail>
      <TeamSort>
        <TeamFilter>
          <TeamFilterLeft>
            <TeamSortInput value={sortBy} setValue={setSortBy} />
          </TeamFilterLeft>
          <TeamFilterRight>
            <ChatBotBtn />
            <div style={{ width: "20rem" }}>
              <SearchPost
                value={teamName}
                setValue={setTeamName}
                placeholder={"팀 이름을 검색해주세요"}
              />
            </div>
          </TeamFilterRight>
        </TeamFilter>
        <TeamBoxArea>
          <FaAngleLeft
            size={"1.5rem"}
            style={{
              position: "absolute",
              left: "1rem",
              cursor: "pointer",
            }}
            onClick={handlePrevPage}
          />
          <FaAngleRight
            size={"1.5rem"}
            style={{ position: "absolute", right: "1rem", cursor: "pointer" }}
            onClick={handleNextPage}
          />
          {currentTeams && currentTeams.length > 0 ? (
            currentTeams.map((team, index) => (
              <TeamBox key={index} onClick={() => handleGoToTeam(team.teamId)}>
                <img
                  src={team.teamImg || TeamImg}
                  alt="이미지 없음"
                  style={{
                    width: "100%",
                    minWidth: "100%",
                    height: "10rem",
                    minHeight: "10rem",
                    objectFit: "contain",
                    borderRadius: "0.5rem",
                    border: "1px solid black",
                  }}
                />
                <div style={{ paddingLeft: "0.3rem" }}>
                  <TeamNameText text={team.teamName || "팀 이름"} />
                  <TeamDetailText
                    text={`창단일 : ${
                      team.createdAt
                        ? `${new Date(team.createdAt).getFullYear()}년 ${String(
                            new Date(team.createdAt).getMonth() + 1
                          ).padStart(2, "0")}월 ${String(
                            new Date(team.createdAt).getDate()
                          ).padStart(2, "0")}일`
                        : "정보 없음"
                    }`}
                  />
                  <TeamDetailText
                    text={`팀원 수 : ${team.teamMemberCount || "정보 없음"}명`}
                  />
                  <TeamDetailText
                    text={`위치 : ${team.teamLocation || "정보 없음"}`}
                  />
                </div>
              </TeamBox>
            ))
          ) : (
            <div
              style={{
                width: "100%",
                height: "fit-content",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              조건에 맞는 팀이 없습니다
            </div>
          )}
        </TeamBoxArea>
      </TeamSort>
    </Container>
  );
}
