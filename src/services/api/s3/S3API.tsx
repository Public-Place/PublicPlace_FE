import { axios } from "../../utils/axios";
import { GetPostsAPI } from "../post/GetPostsAPI";
import { GetUserAPI } from "../user/GetUserAPI";

// 프로필 이미지 수정
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
    // console.log("s3 이미지 변환 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("s3 이미지 변환 실패", error);
  }
};

// 회원가입 시 기본 프로필 이미지 설정
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

// 게시글 작성 시 이미지 설정
export const CreatePostImageS3API = async (PostImage: any) => {
  // 이미지 파일을 Blob으로 변환
  const getFileBlob = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };

  const category = "전체";
  const sortBy = "createdAt";
  const pageNum = 1;

  const postArray = await GetPostsAPI({ category, sortBy, pageNum });

  // postArray에서 가장 큰 postId 찾기
  const maxPostId = postArray.reduce(
    (maxId: number, post: { postId: number }) => {
      return post.postId > maxId ? post.postId : maxId;
    },
    0
  ); // 초기값 0 설정

  // postId + 1을 파일 이름으로 설정
  const newPostId = maxPostId + 1;

  const postBlob = await getFileBlob(PostImage);
  const formData = new FormData();
  formData.append("file", postBlob, `post_image_${newPostId}.png`);

  try {
    const response = await axios.post(`/api/files/upload`, formData);
    // console.log("s3 이미지 변환 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("s3 이미지 변환 실패", error);
  }
};

// 게시글 수정 시 이미지 설정
export const UpdatePostImageS3API = async (PostImage: any, postId: number) => {
  // 이미지 파일을 Blob으로 변환
  const getFileBlob = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };

  // 게시글 이미지가 URL일 경우 S3에 업로드하지 않고 바로 반환
  if (PostImage.startsWith("http")) {
    return PostImage;
  }

  const postBlob = await getFileBlob(PostImage);
  const formData = new FormData();
  formData.append("file", postBlob, `post_image_${postId}.png`);

  try {
    const response = await axios.post(`/api/files/upload`, formData);
    // console.log("s3 이미지 변환 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("s3 이미지 변환 실패", error);
  }
};

// 팀 생성 시 팀 대표 이미지 설정
export const CreateTeamImageS3API = async (
  teamImage: any,
  teamName: string
) => {
  // 이미지 파일을 Blob으로 변환
  const getFileBlob = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };

  // 게시글 이미지가 URL일 경우 S3에 업로드하지 않고 바로 반환
  if (teamImage.startsWith("http")) {
    return teamImage;
  }

  const postBlob = await getFileBlob(teamImage);
  const formData = new FormData();
  formData.append("file", postBlob, `${teamName}.png`);

  try {
    const response = await axios.post(`/api/files/upload`, formData);
    // console.log("s3 이미지 변환 성공", response.data);
    return response.data;
  } catch (error) {
    // console.log("s3 이미지 변환 실패", error);
  }
};
