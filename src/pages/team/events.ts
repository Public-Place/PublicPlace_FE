import { useState } from "react";
import { GetTeamListAPI } from "../../services/api/team/GetTeamListAPI";
import { SortedTeamListType, TeamListType } from "../../dtos/team/TeamListType";
import { GetTeamSortedAPI } from "../../services/api/team/GetTeamSortedAPI";

export const useSearchTeamEvent = () => {
  const [teamList, setTeamList] = useState<TeamListType[]>();
  const [randomTeam, setRandomTeam] = useState<TeamListType[]>();
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 팀 인덱스 관리

  // 선택된 팀 정렬 방식
  const [sortBy, setSortBy] = useState("");

  // 팀 이름 검색 상태
  const [teamName, setTeamName] = useState("");

  // 팀 정렬 검색 배열
  const [sortedTeamList, setSortedTeamList] = useState<SortedTeamListType[]>();

  // 팀 정렬 검색 현재 페이지
  const [currentPage, setCurrentPage] = useState(0);
  const teamsPerPage = 4;

  const handleGetTeamList = async () => {
    const result = await GetTeamListAPI();
    setTeamList(result);

    // 팀 개수에 따라 랜덤 팀 선택 로직
    if (result.length <= 5) {
      setRandomTeam(result); // 5개 이하일 경우 전부 저장
    } else {
      const shuffledTeams = [...result].sort(() => Math.random() - 0.5); // 배열 섞기
      setRandomTeam(shuffledTeams.slice(0, 5)); // 랜덤으로 5개 선택하여 저장
    }
  };

  // 랜덤 팀 좌측 버튼 클릭 시
  const handlePrevTeam = () => {
    if (randomTeam) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? randomTeam.length - 1 : prevIndex - 1
      );
    }
  };

  // 랜덤 팀 우측 버튼 클릭 시
  const handleNextTeam = () => {
    if (randomTeam) {
      setCurrentIndex((prevIndex) =>
        prevIndex === randomTeam.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // 팀 정렬 검색 로직
  const handleGetTeamSorted = async () => {
    setSortedTeamList(await GetTeamSortedAPI({ sortBy, teamName }));
  };

  // 팀 정렬 검색 다음 4개 팀
  const handleNextPage = () => {
    if (sortedTeamList) {
      if (currentPage < Math.ceil(sortedTeamList.length / teamsPerPage) - 1) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  // 팀 정렬 검색 이전 4개 팀
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 현재 페이지에서 출력할 팀 배열
  const currentTeams = sortedTeamList?.slice(
    currentPage * teamsPerPage,
    (currentPage + 1) * teamsPerPage
  );

  return {
    teamList,
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
    sortedTeamList,
    currentTeams,
    handleNextPage,
    handlePrevPage,
    currentPage,
    teamsPerPage,
  };
};
