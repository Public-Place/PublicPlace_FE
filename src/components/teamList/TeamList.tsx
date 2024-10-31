import { useEffect } from "react";
import { SearchPost } from "../input/Input";
import { useTeamListEvent } from "./events";
import { Container, TeamListHeader, TeamListUp, TeamName } from "./styles";
import { TeamCardModal } from "../modal/Modal";

export const TeamList = () => {
  const {
    sortedTeamList,
    handleGetTeamSorted,
    teamName,
    setTeamName,
    isTeamCardOpen,
    setIsTeamCardOpen,
    selectedTeam,
    handleTeamClick,
  } = useTeamListEvent();

  useEffect(() => {
    handleGetTeamSorted(teamName);
  }, [teamName]);

  return (
    <Container>
      <TeamListHeader>팀 리스트</TeamListHeader>
      <SearchPost
        value={teamName}
        setValue={setTeamName}
        placeholder="Search team..."
        radius="0.5rem"
      />
      <TeamListUp>
        {sortedTeamList &&
          sortedTeamList.map((team, index) => (
            <>
              <TeamName key={index} onClick={() => handleTeamClick(team)}>
                {team.teamName}
              </TeamName>
              {selectedTeam && (
                <TeamCardModal
                  isTeamCardOpen={isTeamCardOpen}
                  setIsTeamCardOpen={setIsTeamCardOpen}
                  team={selectedTeam}
                />
              )}
            </>
          ))}
      </TeamListUp>
    </Container>
  );
};
