import { useRef, useState } from "react";
import { GetTeamPostAPI } from "../../services/api/teamPost/GetTeamPostAPI";
import {
  CreateTeamPostDto,
  TeamPostDto,
} from "../../dtos/teamPost/TeamPostDto";
import { CreateTeamPostCommentAPI } from "../../services/api/comment/CreateTeamPostCommentAPI";
import { DeleteTeamPostCommentAPI } from "../../services/api/comment/DeleteTeamPostCommentAPI";
import { GetUserAPI } from "../../services/api/user/GetUserAPI";
import { useNavigate } from "react-router-dom";
import { KakaoLat, KakaoLng } from "../../constants/FixValues";
import { useGeolocation } from "../../hooks/UseGeolocation";
import { CreateTeamPostAPI } from "../../services/api/teamPost/CreateTeamPostAPI";
import { CreateTeamPostImageS3API } from "../../services/api/s3/S3API";

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

/* ------------------------------------------------- */

export const useWriteTeamPostEvent = () => {
  const navigator = useNavigate();

  // 팀 게시글 내용
  const [content, setContent] = useState("");

  // 활동 장소
  const [activityAddr, setActivityAddr] = useState("");

  // 활동 장소 위도
  const [activityLat, setActivityLat] = useState(KakaoLat);

  // 활동 장소 경도
  const [activityLng, setActivityLng] = useState(KakaoLng);

  // 첨부 이미지
  const [attachImg, setAttachImg] = useState("");
  const attachImgRef = useRef<HTMLInputElement>(null);

  // 위치 정보를 가져오기 위해 커스텀 훅 호출
  const geoLocation = useGeolocation();

  // Kakao Map ChangeEventHandler
  const handleAddressChange = (addr: string) => {
    setActivityAddr(addr);
  };

  // 위도/경도 저장
  const handleSetLatLng = (Lat: number, Lng: number) => {
    setActivityLat(Lat);
    setActivityLng(Lng);
  };

  // 파일 탐색기 열기
  const handleTeamImageClick = () => {
    attachImgRef.current?.click();
  };

  // 팀 이미지 변경 시 실행되는 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setAttachImg(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 작성하기 버튼 클릭 시
  const handleClickWriteTeamPost = async (teamId: number) => {
    if (!CheckTeamPostEssentialValues()) {
      return;
    } else {
      if (window.confirm("게시글을 작성하시겠습니까?")) {
        const teamPostImg = attachImg
          ? await CreateTeamPostImageS3API(attachImg, teamId)
          : "";

        const CreateTeamPost: CreateTeamPostDto = {
          content: content,
          image: teamPostImg,
          latitude: activityLat,
          longitude: activityLng,
          matchLocation: activityAddr,
        };

        const result = await CreateTeamPostAPI({ teamId, CreateTeamPost });

        if (result.code === 200) {
          alert("게시글 작성을 완료하였습니다.");
          navigator("/team", { state: teamId });
          window.location.reload();
        } else {
          if (result.response.data.code === 500) {
            alert("예상하지 못 한 이유로 인해 게시글 작성을 실패하였습니다.");
          } else {
            alert(`에러 코드 : ${result.response.data.code}`);
          }
        }
      }
    }
  };

  // 필수 입력 값 유효성 검사
  const CheckTeamPostEssentialValues = () => {
    if (!content) {
      alert("게시글 내용을 입력해주세요.");
      return false;
    }
    return true;
  };

  // 페이지 Type
  const [isCreateType, setIsCreateType] = useState<boolean>();

  // 게시글 정보
  const [teamPost, setTeamPost] = useState<TeamPostDto>();

  // 게시글 정보 조회
  const handleGetTeamPost = async (postId: number) => {
    const result = await GetTeamPostAPI(postId);
    setTeamPost(result);
  };

  return {
    content,
    setContent,
    activityAddr,
    setActivityAddr,
    activityLat,
    setActivityLat,
    activityLng,
    setActivityLng,
    attachImg,
    setAttachImg,
    attachImgRef,
    geoLocation,
    handleAddressChange,
    handleSetLatLng,
    handleTeamImageClick,
    handleFileChange,
    handleClickWriteTeamPost,
    isCreateType,
    setIsCreateType,
    handleGetTeamPost,
    teamPost,
  };
};
