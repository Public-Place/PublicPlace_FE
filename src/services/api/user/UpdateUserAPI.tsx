import { UpdateMyInfoDto } from "../../../dtos/updateMyInfo/UpdateMyInfoDto";
import { axios } from "../../utils/axios";

export const UpdateLocalUserAPI = async (
  UpdateMyLocalInfoData: UpdateMyInfoDto
) => {
  try {
    const response = await axios.put(
      `/api/v1/user/updateLocalUser`,
      UpdateMyLocalInfoData
    );
    // console.log("일반 회원정보 수정 성공", response.data);
    alert("회원정보 수정 완료");
    return response.data;
  } catch (error) {
    // console.log("일반 회원정보 수정 실패", error);
  }
};

export const UpdateKakaoUserAPI = async (
  UpdateMyKakaoInfoData: UpdateMyInfoDto
) => {
  try {
    const response = await axios.put(
      "api/v1/user/updateKakaoUser",
      UpdateMyKakaoInfoData
    );
    console.log("카카오 회원정보 수정 성공", response.data);
    alert("회원정보 수정 완료");
    return response.data;
  } catch (error) {
    console.log("카카오 회원정보 수정 실패", error);
  }
};
