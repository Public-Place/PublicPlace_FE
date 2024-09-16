import { axios } from "../../utils/axios";
import { GetUserAPI } from "../user/GetUserAPI";

// S3 API 함수
export const S3API = async (Profile: any) => {
  // 이미지 파일을 Blob으로 변환
  const getFileBlob = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };

  // userId를 사용하여 프로필 이미지 저장 서버에 유저별 고유 경로 확보
  const user = await GetUserAPI();

  const profileBlob = await getFileBlob(Profile);
  const formData = new FormData();
  formData.append("file", profileBlob, user.userId + "Profile.png");

  try {
    const response = await axios.post(`/api/files/upload`, formData);
    // console.log("s3 이미지 변환 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("s3 이미지 변환 실패", error);
  }
};
