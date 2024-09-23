import { useRef, useState } from "react";
import { GetPostDetailAPI } from "../../services/api/post/GetPostDetailAPI";
import { newCommentType, PostInfoType } from "./types";
import { CreatePostCommentAPI } from "../../services/api/comment/CreatePostCommentAPI";
import { DeletePostCommentAPI } from "../../services/api/comment/DeletePostCommentAPI";
import { PostImageS3API } from "../../services/api/s3/S3API";
import { CreatePostDto } from "../../dtos/post/CreatePostDto";
import { useNavigate } from "react-router-dom";
import { CreatePostAPI } from "../../services/api/post/CreatePostAPI";

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

  // 케밥 Modal 관리 상태
  const [isKebabOpen, setIsKebabOpen] = useState(false);

  // 케밥 버튼 클릭 시
  const handleClickKebab = () => {
    setIsKebabOpen((prev) => !prev);
  };

  return {
    postInfo,
    handleGetPostInfo,
    newComment,
    setNewComment,
    handleCreateComment,
    handleDeleteComment,
    isKebabOpen,
    handleClickKebab,
  };
};

export const useWritePostEvent = () => {
  const navigator = useNavigate();

  // 작성할 게시글의 정보들
  const [postCategory, setpostCategory] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState("");

  // 게시글 이미지를 위한 Ref
  const postImageRef = useRef<HTMLInputElement>(null);

  // 파일 탐색기 열기
  const handlePostImageClick = () => {
    postImageRef.current?.click();
  };

  // 게시글 이미지 변경 시 실행되는 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setPostImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 게시글 작성 버튼 클릭 시 유효성 검사
  const CheckEssentialValues = () => {
    if (!postCategory || postCategory === "선택") {
      alert("카테고리를 선택해주세요.");
      return false;
    } else if (!postTitle) {
      alert("제목을 작성해주세요.");
      return false;
    } else if (!postContent) {
      alert("내용을 입력해주세요.");
      return false;
    }
    return true;
  };

  // '작성' 클릭 시
  const handleClickWritePostBtn = async () => {
    if (!CheckEssentialValues()) {
      return;
    } else {
      if (window.confirm("게시글을 작성하시겠습니까?")) {
        // 게시글 이미지를 선택하지 않았다면 S3API 사용 X
        const postImg = postImage ? await PostImageS3API(postImage) : "";

        const CreatePostData: CreatePostDto = {
          category: postCategory,
          content: postContent,
          postImg: postImg,
          title: postTitle,
        };

        const result = await CreatePostAPI(CreatePostData);

        if (result.success) {
          alert("게시글 작성 완료");
          navigator("/board");
          // window.location.reload();
        } else {
          alert("게시글 작성 실패");
        }
      } else {
        return;
      }
    }
  };

  return {
    postCategory,
    setpostCategory,
    postTitle,
    setPostTitle,
    postContent,
    setPostContent,
    postImage,
    setPostImage,
    postImageRef,
    handlePostImageClick,
    handleFileChange,
    handleClickWritePostBtn,
  };
};
