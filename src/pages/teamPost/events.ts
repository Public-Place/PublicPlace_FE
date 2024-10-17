import { useState } from "react";
import { GetTeamPostAPI } from "../../services/api/teamPost/GetTeamPostAPI";
import { TeamPostDto } from "../../dtos/teamPost/TeamPostDto";
import { CreateTeamPostCommentAPI } from "../../services/api/comment/CreateTeamPostCommentAPI";
import { DeleteTeamPostCommentAPI } from "../../services/api/comment/DeleteTeamPostCommentAPI";
import { GetUserAPI } from "../../services/api/user/GetUserAPI";

export const useTeamPostEvent = () => {
  // 게시글
  const [teamPost, setTeamPost] = useState<TeamPostDto>();

  // 게시글 정보 조회
  const handleGetPostInfo = async (teamBoardId: number) => {
    const result = await GetTeamPostAPI(teamBoardId);
    setTeamPost(result);
  };

  // 작성한 댓글
  const [comment, setComment] = useState("");

  // 댓글 작성 버튼 클릭 시
  const handleClickWriteCommentBtn = async (teamBoardId: number) => {
    const result = await CreateTeamPostCommentAPI({ teamBoardId, comment });

    if (result.code === 200) {
      window.location.reload();
    } else {
      alert("예상하지 못 한 오류로 인해 댓글 작성을 실패하였습니다.");
    }
  };

  // 댓글 삭제 버튼 클릭 시
  const handleClickDeleteCommentBtn = async (commentId: number) => {
    const result = await DeleteTeamPostCommentAPI(commentId);

    if (result.code === 200) {
      alert("댓글이 삭제되었습니다.");
      window.location.reload();
    } else {
      if (result.response.data.code === 403) {
        alert("본인이 작성한 댓글만 삭제할 수 있습니다.");
      } else {
        alert("예상하지 못 한 오류로 인해 댓글 삭제를 실패하였습니다.");
      }
    }
  };

  // 작성자 본인 인증 여부
  const [isWriter, setIsWriter] = useState(true);

  // 작성자 본인 인증 로직
  const handleAuthWriter = async () => {
    const userInfo = await GetUserAPI();

    if (userInfo.userId === teamPost?.userId) {
      setIsWriter(true);
    } else {
      setIsWriter(false);
    }
  };

  // Kebab Modal 관리 상태
  const [isKebabOpen, setIsKebabOpen] = useState(false);

  // 케밥 버튼 클릭 시
  const handleClickKebab = () => {
    setIsKebabOpen((prev) => !prev);
  };

  return {
    teamPost,
    handleGetPostInfo,
    comment,
    setComment,
    handleClickWriteCommentBtn,
    handleClickDeleteCommentBtn,
    isWriter,
    handleAuthWriter,
    isKebabOpen,
    handleClickKebab,
  };
};
