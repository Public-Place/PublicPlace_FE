import { useState } from "react";
import { GetPostDetailAPI } from "../../services/api/post/GetPostDetailAPI";
import { newCommentType, PostInfoType } from "./types";
import { CreatePostCommentAPI } from "../../services/api/comment/CreatePostCommentAPI";
import { DeletePostCommentAPI } from "../../services/api/comment/DeletePostCommentAPI";

export const usePostEvent = ({ postId }: { postId: number }) => {
  const [postInfo, setPostInfo] = useState<PostInfoType>();
  const [newComment, setNewComment] = useState("");

  // 게시글 정보 가져오기
  const handleGetPostInfo = async () => {
    const result = await GetPostDetailAPI({ postId });
    setPostInfo(result);
  };

  // '작성' 버튼 클릭 시
  const handleCreateComment = async ({
    newComment,
    postId,
  }: newCommentType) => {
    if (newComment === "") {
      alert("댓글을 작성해주세요.");
    } else await CreatePostCommentAPI({ newComment, postId });
  };

  // '삭제' 버튼 클릭 시
  const handleDeleteComment = async (commentId: number) => {
    const result = await DeletePostCommentAPI({ commentId });

    // 삭제 권한 확인 로직
    if (result.success) {
      alert("댓글이 삭제되었습니다.");
      window.location.reload();
    } else if (!result.success) {
      alert("본인이 작성한 댓글만 삭제할 수 있습니다.");
    }
  };

  return {
    postInfo,
    handleGetPostInfo,
    newComment,
    setNewComment,
    handleCreateComment,
    handleDeleteComment,
  };
};
