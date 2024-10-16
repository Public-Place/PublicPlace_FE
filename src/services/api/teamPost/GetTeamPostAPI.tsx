import { axios } from "../../utils/axios";

export const GetTeamPostAPI = async (teamBoardId: number) => {
  try {
    const response = await axios.get(
      `/api/v1/team-board/getDetail/${teamBoardId}`
    );
    // console.log("팀 게시글 조회 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 게시글 조회 실패", error);
  }
};
