import { axios } from "../../utils/axios";
import { GetTeamPostListAPIType } from "./types";

export const GetTeamPostListAPI = async ({
  teamId,
  page,
}: GetTeamPostListAPIType) => {
  try {
    const response = await axios.get(
      `/api/v1/team-board/getList/{teamId}?page=${page}&size=100&teamId=${teamId}`
    );
    // console.log("팀 게시글 조회 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 게시글 조회 실패", error);
  }
};
