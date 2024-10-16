export interface TeamPostDto {
  teamBoardId: number;
  content: string;
  userName: string;
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
