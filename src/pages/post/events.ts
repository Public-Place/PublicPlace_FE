import { useRef, useState } from "react";
import { GetPostDetailAPI } from "../../services/api/post/GetPostDetailAPI";
import { newCommentType, PostInfoType } from "./types";
import { CreatePostCommentAPI } from "../../services/api/comment/CreatePostCommentAPI";
import { DeletePostCommentAPI } from "../../services/api/comment/DeletePostCommentAPI";
import {
  CreatePostImageS3API,
  UpdatePostImageS3API,
} from "../../services/api/s3/S3API";
import { PostDto } from "../../dtos/post/PostDto";
import { useNavigate } from "react-router-dom";
import { CreatePostAPI } from "../../services/api/post/CreatePostAPI";
import { UpdatePostAPI } from "../../services/api/post/UpdatePostAPI";
import { GetUserAPI } from "../../services/api/user/GetUserAPI";
import { LikePostAPI } from "../../services/api/post/LikePostAPI";

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
    } else {
      const result = await CreatePostCommentAPI({ newComment, postId });
      console.log("result : ", result);

      if (result.code === 200) {
        window.location.reload();
      } else {
        if (result.response.data.code === 500) {
          alert("예상하지 못 한 오류로 인해 댓글 작성을 실패하였습니다.");
        } else if (result.response.data.code !== 500) {
          alert(`에러 코드 : ${result.response.data.code}`);
        }
      }
    }
  };

  // '삭제' 버튼 클릭 시
  const handleDeleteComment = async (commentId: number) => {
    const result = await DeletePostCommentAPI({ commentId });
    console.log("result : ", result);

    if (result.code === 200) {
      alert("댓글이 삭제되었습니다.");
      window.location.reload();
    } else {
      if (result.response.data.code === 500) {
        alert("예상하지 못 한 오류로 인해 댓글 삭제를 실패하였습니다.");
      } else if (result.response.data.code === 403) {
        alert("본인이 작성한 댓글만 삭제할 수 있습니다.");
      } else {
        alert(`에러 코드 : ${result.response.data.code}`);
      }
    }
  };

  // 케밥 Modal 관리 상태
  const [isKebabOpen, setIsKebabOpen] = useState(false);

  // 케밥 버튼 클릭 시
  const handleClickKebab = () => {
    setIsKebabOpen((prev) => !prev);
  };

  // 작성자 본인 인증 여부
  const [isWriter, setIsWriter] = useState(true);

  // 작성자 본인 인증 로직 (중복 불가능한 닉네임을 활용)
  const handleAuthWriter = async () => {
    const userInfo = await GetUserAPI();
    if (userInfo.nickname === postInfo?.authorNickname) {
      setIsWriter(true);
    } else {
      setIsWriter(false);
    }
  };

  // 추천 버튼 클릭 상태
  const [isClickedLike, setIsClickedLike] = useState(false);

  // 추천 버튼 클릭 로직
  const handleClickLike = async () => {
    const result = await LikePostAPI({ postId });
    console.log("result : ", result);
    if (result.msg === "좋아요가 추가되었습니다.") {
      setIsClickedLike(true);
      setTimeout(() => {
        setIsClickedLike(false);
        window.location.reload();
      }, 100);
    } else if (result.msg === "좋아요가 취소되었습니다") {
      alert("이미 좋아요를 누른 게시글입니다. 좋아요가 취소되었습니다.");
      setIsClickedLike(false);
      window.location.reload();
    }
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
    isWriter,
    handleAuthWriter,
    isClickedLike,
    handleClickLike,
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
        const postImg = postImage ? await CreatePostImageS3API(postImage) : "";

        const CreatePostData: PostDto = {
          category: postCategory,
          content: postContent,
          postImg: postImg,
          title: postTitle,
        };

        const result = await CreatePostAPI(CreatePostData);

        if (result.code === 200) {
          alert("게시글이 작성되었습니다.");
          navigator("/board");
        } else {
          if (result.response.data.code === 500) {
            alert("예상하지 못 한 오류로 인해 게시글 작성을 실패하였습니다.");
          } else if (result.response.data.code !== 500) {
            alert(`에러 코드 : ${result.response.data.code}`);
          }
        }
      } else {
        return;
      }
    }
  };

  // '수정' 클릭 시
  const handleClickUpdatePostBtn = async ({ postId }: { postId: number }) => {
    if (!CheckEssentialValues) {
      return;
    } else {
      if (window.confirm("게시글을 수정하시겠습니까?")) {
        // 게시글 이미지를 선택하지 않았다면 S3API 사용 X
        const postImg = postImage
          ? await UpdatePostImageS3API(postImage, postId)
          : "";

        const UpdatePostData: PostDto = {
          category: postCategory,
          content: postContent,
          postImg: postImg,
          title: postTitle,
        };

        const result = await UpdatePostAPI({ postId, UpdatePostData });

        if (result.code === 200) {
          alert("게시글 수정 완료");
          navigator("/post", { state: postId });
        } else {
          if (result.response.data.code === 500) {
            alert("예상하지 못 한 오류로 인해 게시글 수정을 실패하였습니다.");
          } else if (result.response.data.code !== 500) {
            alert(`에러 코드 : ${result.response.data.code}`);
          }
        }
      } else {
        return;
      }
    }
  };

  const [AboveText, setAboveText] = useState("");
  const [btnValue, setBtnValue] = useState("");

  // 게시글 상단 text와 버튼 value 값
  const handleToggleValue = ({ postId }: { postId: number }) => {
    if (postId) {
      setAboveText("게시글 수정");
      setBtnValue("수정");
    } else {
      setAboveText("게시글 작성");
      setBtnValue("작성");
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
    handleClickUpdatePostBtn,
    AboveText,
    btnValue,
    handleToggleValue,
  };
};
