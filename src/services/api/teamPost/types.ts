import { CreateTeamPostDto } from "../../../dtos/teamPost/TeamPostDto";

export interface GetTeamPostListAPIType {
  teamId: number;
  page: number;
  content?: string;
}

export interface CreateTeamPostType {
  teamId: number;
  CreateTeamPost: CreateTeamPostDto;
}

export interface UpdateTeamPostType {
  teamBoardId: number;
  UpdateTeamPost: CreateTeamPostDto;
}
