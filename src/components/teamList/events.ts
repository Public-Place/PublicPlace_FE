import { useState } from "react";
import { SortedTeamListType } from "../../dtos/team/TeamListType";
import { GetTeamSortedAPI } from "../../services/api/team/GetTeamSortedAPI";

export const useTeamListEvent = () => {
  // 팀 리스트
  const [sortedTeamList, setSortedTeamList] = useState<SortedTeamListType[]>();

  // 팀 정렬 검색 로직
  const handleGetTeamSorted = async (teamName: string) => {
    setSortedTeamList(
      await GetTeamSortedAPI({ sortBy: "newest", teamName: teamName })
    );
  };

  // 클릭한 팀 정보
  const [selectedTeam, setSelectedTeam] = useState<SortedTeamListType>();

  // 클릭한 팀 정보 저장
  const handleTeamClick = (team: SortedTeamListType) => {
    setSelectedTeam(team);
    setIsTeamCardOpen(true);
  };

  // 팀 이름 검색 단어
  const [teamName, setTeamName] = useState("");

  // 팀 카드 Modal show & hide
  const [isTeamCardOpen, setIsTeamCardOpen] = useState(false);

  return {
    sortedTeamList,
    handleGetTeamSorted,
    teamName,
    setTeamName,
    isTeamCardOpen,
    setIsTeamCardOpen,
    selectedTeam,
    handleTeamClick,
  };
};
