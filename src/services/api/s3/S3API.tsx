import { axios } from "../../utils/axios";
import { GetUserAPI } from "../user/GetUserAPI";

// .png -> url
export const S3API = async (Profile: any) => {
  // 이미지 파일을 Blob으로 변환
  const getFileBlob = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };

  // 프로필 이미지가 URL일 경우 S3에 업로드하지 않고 바로 반환
  if (Profile.startsWith("http")) {
    return Profile;
  }

  // userId를 사용하여 프로필 이미지 저장 서버에 유저별 고유 경로 확보
  const user = await GetUserAPI();

  const profileBlob = await getFileBlob(Profile);
  const formData = new FormData();
  formData.append("file", profileBlob, user.userId + "Profile.png");

  try {
    const response = await axios.post(`/api/files/upload`, formData);
    console.log("s3 이미지 변환 성공", response.data);
    return response.data;
  } catch (error) {
    console.log("s3 이미지 변환 실패", error);
  }
};

// .png -> url (회원가입 시에만 사용)
export const DefaultProfileS3API = async (Profile: any) => {
  // 이미지 파일을 Blob으로 변환
  const getFileBlob = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };

  const profileBlob = await getFileBlob(Profile);
  const formData = new FormData();
  formData.append("file", profileBlob, "DefaultProfile.png");

  try {
    const response = await axios.post(`/api/files/upload`, formData);
    // console.log("s3 이미지 변환 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("s3 이미지 변환 실패", error);
  }
};
