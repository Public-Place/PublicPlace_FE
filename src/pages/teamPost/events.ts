import { useState } from "react";
import { GetTeamPostAPI } from "../../services/api/teamPost/GetTeamPostAPI";
import { TeamPostDto } from "../../dtos/teamPost/TeamPostDto";

export const useTeamPostEvent = () => {
  const [teamPost, setTeamPost] = useState<TeamPostDto>();

  const handleGetPostInfo = async (teamBoardId: number) => {
    const result = await GetTeamPostAPI(teamBoardId);
    setTeamPost(result);
  };

  return {
    teamPost,
    handleGetPostInfo,
  };
};
