import { axios } from "../../utils/axios";

// S3 API 함수
export const S3API = async (DefaultProfile: any) => {
  // 이미지 파일을 Blob으로 변환
  const getFileBlob = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };

  const profileBlob = await getFileBlob(DefaultProfile);
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
