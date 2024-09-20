export interface CommentsType {
  commentId: number;
  content: string;
  createdDate: string;
  nickname: string;
  profileImg: string;
}

export interface PostInfoType {
  authorNickname: string;
  category: string;
  profileImg: string;
  commentCount: number;
  comments: CommentsType[];
  content: string;
  createdDate: string;
  likeCount: number;
  postImg: string;
  title: string;
  viewCount: number;
}

export interface newCommentType {
  newComment: string;
  postId: number;
}
