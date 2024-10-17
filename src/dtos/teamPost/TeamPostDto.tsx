export interface TeamPostDto {
  userId: number;
  teamBoardId: number;
  content: string;
  userName: string;
  profileImg: string;
  matchLocation: string;
  longitude: number;
  latitude: number;
  createdDate: string;
  comments: TeamPostCommentType[];
  image: string;
}

export interface TeamPostCommentType {
  commentId: number;
  content: string;
  userName: string;
  profileImg: string;
  createdDate: string;
}
