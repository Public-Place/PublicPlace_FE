import { axios } from "../../utils/axios";
import { GetTeamSortedAPIType } from "./types";

export const GetTeamSortedAPI = async ({
  sortBy,
  teamName,
}: GetTeamSortedAPIType) => {
  try {
    const response = await axios.get(
      `api/v1/team/sorted?sortBy=${sortBy}&teamName=${teamName}`
    );
    // console.log("팀 정렬 검색 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("팀 정렬 검색 실패", error);
  }
};
