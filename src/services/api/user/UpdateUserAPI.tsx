import { UpdateMyInfoDto } from "../../../dtos/updateMyInfo/UpdateMyInfoDto";
import { axios } from "../../utils/axios";

export const UpdateUserAPI = async (UpdateMyInfoData: UpdateMyInfoDto) => {
  try {
    const response = await axios.put(
      `/api/v1/user/updateUser`,
      UpdateMyInfoData
    );
    console.log("회원정보 수정 성공", response.data);
    alert("회원정보 수정 완료");
    return response.data;
  } catch (error) {
    console.log("회원정보 수정 실패", error);
  }
};
