import { SignUpDto } from "../../../dtos/signUp/SignUpDto";
import { axios } from "../../utils/axios";

export const SignUpAPI = async (SignUpData: SignUpDto) => {
  try {
    const response = await axios.post(
      "/sign-api/sign-up?roles=admin",
      SignUpData
    );
    console.log("회원가입 성공", response.data);
    return response.data;
  } catch (error) {
    console.log("회원가입 실패", error);
  }
};
