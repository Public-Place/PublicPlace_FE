export interface GetPostsAPIType {
  category: string;
  sortBy: string;
  pageNum: number;
  postName?: string;
}

export interface PostIdType {
  postId: number;
}
