import { useEffect, useRef, useState } from "react";
import { GetTeamListAPI } from "../../services/api/team/GetTeamListAPI";
import { SortedTeamListType, TeamListType } from "../../dtos/team/TeamListType";
import { GetTeamSortedAPI } from "../../services/api/team/GetTeamSortedAPI";
import { CreateTeamImageS3API } from "../../services/api/s3/S3API";
import { CreateTeamDto } from "../../dtos/team/CreateTeamDto";
import { CreateTeamAPI } from "../../services/api/team/CreateTeamAPI";
import { useNavigate } from "react-router-dom";
import { CheckDuplicationType } from "../../components/modal/types";
import { TeamNameCheckAPI } from "../../services/api/checkDuplication/TeamNameCheckAPI";
import {
  BasicMsgColor,
  ErrorMsgColor,
  KakaoLat,
  KakaoLng,
  SuccessMsgColor,
} from "../../constants/FixValues";
import { GetTeamByIdAPI } from "../../services/api/team/GetTeamByIdAPI";
import { GetTeamPostListAPI } from "../../services/api/teamPost/GetTeamPostListAPI";
import { TeamPostListType } from "./types";
import { useGeolocation } from "../../hooks/UseGeolocation";
import { TeamAuthCheckAPI } from "../../services/api/team/teamAuthCheckAPI";
import { UpdateTeamAPI } from "../../services/api/team/UpdateTeamAPI";

export const useSearchTeamEvent = () => {
  const navigator = useNavigate();

  const [teamList, setTeamList] = useState<TeamListType[]>();
  const [randomTeam, setRandomTeam] = useState<TeamListType[]>();
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 팀 인덱스 관리

  // 선택된 팀 정렬 방식
  const [sortBy, setSortBy] = useState("");

  // 팀 이름 검색 상태
  const [teamName, setTeamName] = useState("");

  // 팀 정렬 검색 배열
  const [sortedTeamList, setSortedTeamList] = useState<SortedTeamListType[]>();

  // 팀 정렬 검색 현재 페이지
  const [currentPage, setCurrentPage] = useState(0);
  const teamsPerPage = 4;

  const handleGetTeamList = async () => {
    const result = await GetTeamListAPI();
    setTeamList(result);

    // 팀 개수에 따라 랜덤 팀 선택 로직
    if (result.length <= 5) {
      setRandomTeam(result); // 5개 이하일 경우 전부 저장
    } else {
      const shuffledTeams = [...result].sort(() => Math.random() - 0.5); // 배열 섞기
      setRandomTeam(shuffledTeams.slice(0, 5)); // 랜덤으로 5개 선택하여 저장
    }
  };

  // 랜덤 팀 좌측 버튼 클릭 시
  const handlePrevTeam = () => {
    if (randomTeam) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? randomTeam.length - 1 : prevIndex - 1
      );
    }
  };

  // 랜덤 팀 우측 버튼 클릭 시
  const handleNextTeam = () => {
    if (randomTeam) {
      setCurrentIndex((prevIndex) =>
        prevIndex === randomTeam.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // 팀 정렬 검색 로직
  const handleGetTeamSorted = async () => {
    setSortedTeamList(await GetTeamSortedAPI({ sortBy, teamName }));
  };

  // 팀 정렬 검색 다음 4개 팀
  const handleNextPage = () => {
    if (sortedTeamList) {
      if (currentPage < Math.ceil(sortedTeamList.length / teamsPerPage) - 1) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  // 팀 정렬 검색 이전 4개 팀
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 현재 페이지에서 출력할 팀 배열
  const currentTeams = sortedTeamList?.slice(
    currentPage * teamsPerPage,
    (currentPage + 1) * teamsPerPage
  );

  // 특정 팀 클릭 시
  const handleGoToTeam = (teamId: number) => {
    navigator("/team", { state: teamId });
  };

  return {
    teamList,
    randomTeam,
    handleGetTeamList,
    currentIndex,
    handlePrevTeam,
    handleNextTeam,
    sortBy,
    setSortBy,
    handleGetTeamSorted,
    teamName,
    setTeamName,
    sortedTeamList,
    currentTeams,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    currentPage,
    teamsPerPage,
    handleGoToTeam,
  };
};

/* ------------------------------------------------------------------ */

export const useCreateTeamEvent = () => {
  const navigator = useNavigate();

  // 팀 이름
  const [teamName, setTeamName] = useState("");

  // 팀 한 줄 소개
  const [teamIntroduce, setTeamIntroduce] = useState("");

  // 팀 활동 요일
  const [teamFirstActDay, setTeamFirstActDay] = useState("");
  const [teamSecondActDay, setTeamSecondActDay] = useState("");

  // 팀 대표 이미지
  const [teamImage, setTeamImage] = useState("");
  const teamImageRef = useRef<HTMLInputElement>(null);

  // 팀 활동 장소
  const [activityAddr, setActivityAddr] = useState("");

  // 위치 정보를 가져오기 위해 커스텀 훅 호출
  const geoLocation = useGeolocation();

  // 팀 활동 장소 위도/경도 (기본 좌표 : 판교 카카오 본사)
  const [activityLat, setActivityLat] = useState(KakaoLat);
  const [activityLng, setActivityLng] = useState(KakaoLng);

  // 중복 확인 관련 상태
  const [teamNameSuccess, setTeamNameSuccess] = useState<boolean | null>(null);
  const [teamNameMsg, setTeamNameMsg] = useState("");

  // Kakao Map ChangeEventHandler
  const handleAddressChange = (addr: string) => {
    setActivityAddr(addr);
  };

  // 위도/경도 저장
  const handleSetLatLng = (Lat: number, Lng: number) => {
    setActivityLat(Lat);
    setActivityLng(Lng);
  };

  // 팀 이미지 변경 시 실행되는 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setTeamImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 파일 탐색기 열기
  const handleTeamImageClick = () => {
    teamImageRef.current?.click();
  };

  // 팀 생성하기 버튼 클릭 시
  const handleClickCreateTeam = async () => {
    if (!CheckTeamEssentialValues()) {
      return;
    } else {
      if (!teamNameSuccess) {
        alert("팀 이름 중복 여부를 확인해주세요.");
      } else {
        if (window.confirm(`${teamName} 팀을 생성하시겠습니까?`)) {
          // teamImage를 S3API로 가공 작업
          const teamImg = await CreateTeamImageS3API(teamImage, teamName);

          // activityDays 필드 조건에 따른 처리 (select의 value는 맨 처음에 ""로 설정)
          let activityDaysArray;
          if (teamSecondActDay === "") {
            // teamSecondActDay가 "선택"일 경우, teamFirstActDay 값만 저장
            activityDaysArray = [teamFirstActDay];
          } else {
            // teamSecondActDay가 "선택"이 아닌 경우, 배열로 두 값을 저장
            activityDaysArray = [teamFirstActDay, teamSecondActDay];
          }

          // DTO 생성 후 필드 별로 매핑 작업
          const CreateTeamData: CreateTeamDto = {
            activityDays: activityDaysArray,
            teamImg: teamImg,
            teamInfo: teamIntroduce,
            teamLocation: activityAddr,
            teamName: teamName,
            latitude: activityLat,
            longitude: activityLng,
          };

          // POST Mapping 작업
          const result = await CreateTeamAPI(CreateTeamData);

          if (result.code === 200) {
            alert(`${teamName} 팀을 생성하였습니다.`);
            navigator("/searchteam");
          } else {
            if (result.response.data.code === 500) {
              alert("예상하지 못 한 오류로 인해 팀 생성을 실패하였습니다.");
            } else if (result.response.data.code !== 500) {
              alert(`에러 코드 : ${result.response.data.code}`);
            }
          }
        } else {
          return;
        }
      }
    }
  };

  // 필수 입력 값 유효성 검사
  const CheckTeamEssentialValues = () => {
    if (!teamName) {
      alert("팀 이름을 입력해주세요.");
      return false;
    } else if (!teamIntroduce) {
      alert("팀 한 줄 소개를 입력해주세요.");
      return false;
    } else if (teamFirstActDay === "선택" || !teamFirstActDay) {
      alert("팀 활동 요일을 최소 1개 선택해주세요");
      return false;
    } else if (teamFirstActDay === teamSecondActDay) {
      alert("각각 다른 활동 요일을 선택해주세요");
      return false;
    } else if (!activityAddr) {
      alert("팀 활동 장소를 지정해주세요.");
      return false;
    } else if (!teamImage) {
      alert("팀 대표 이미지를 선택해주세요.");
      return false;
    }
    return true;
  };

  // 팀 이름 중복 확인 버튼 클릭 시
  const handleCheckTeamName = async ({
    value: teamName,
    teamId,
  }: CheckDuplicationType) => {
    if (!teamName) {
      alert("팀 이름을 입력한 후 중복 여부를 확인해주세요.");
    } else {
      if (teamId) {
        // 팀 이름 중복 확인 (팀 정보 수정 페이지)
        const existingInfo = await GetTeamByIdAPI(teamId);

        if (existingInfo.teamName === teamName) {
          setTeamNameSuccess(true);
          setTeamNameMsg("사용 가능한 팀 이름입니다. (기존과 동일)");
        } else {
          const result = await TeamNameCheckAPI(teamName);

          if (result.success) {
            setTeamNameSuccess(result.success);
            setTeamNameMsg(result.msg);
          } else {
            setTeamNameSuccess(result.response.data.success);
            setTeamNameMsg(result.response.data.msg);
          }
        }
      } else {
        // 팀 이름 중복 확인 (팀 생성 페이지)
        const result = await TeamNameCheckAPI(teamName);

        if (result.success) {
          setTeamNameSuccess(result.success);
          setTeamNameMsg(result.msg);
        } else {
          setTeamNameSuccess(result.response.data.success);
          setTeamNameMsg(result.response.data.msg);
        }
      }
    }
  };

  // 중복 여부에 따른 메시지 색상 결정 로직 (팀 이름)
  const getNickNameMsgColor = () => {
    if (teamNameSuccess === true) return SuccessMsgColor;
    if (teamNameSuccess === false) return ErrorMsgColor;
    return BasicMsgColor;
  };

  // 팀 이름 상태가 바뀔 경우 중복 확인 상태 초기화
  useEffect(() => {
    setTeamNameSuccess(null);
    setTeamNameMsg("");
  }, [teamName]);

  // 수정할 팀의 정보
  const [teamInfo, setTeamInfo] = useState<TeamListType>();

  // 수정할 팀 정보 조회
  const handleGetTeamInfo = async (teamId: number) => {
    const result = await GetTeamByIdAPI(teamId);
    setTeamInfo(result);
  };

  // '수정하기' 클릭 시
  const handleClickUpdateTeam = async (teamId: number) => {
    if (!CheckTeamEssentialValues()) {
      return;
    } else {
      if (!teamNameSuccess) {
        alert("팀 이름 중복 여부를 확인해주세요.");
      } else {
        if (window.confirm(`${teamName} 팀의 정보를 수정하시겠습니까?`)) {
          const teamImg = await CreateTeamImageS3API(teamImage, teamName);

          // activityDays 필드 조건에 따른 처리 (select의 value는 맨 처음에 ""로 설정)
          let activityDaysArray;
          if (teamSecondActDay === "") {
            // teamSecondActDay가 "선택"일 경우, teamFirstActDay 값만 저장
            activityDaysArray = [teamFirstActDay];
          } else {
            // teamSecondActDay가 "선택"이 아닌 경우, 배열로 두 값을 저장
            activityDaysArray = [teamFirstActDay, teamSecondActDay];
          }

          // DTO 생성 후 필드 별로 매핑 작업
          const UpdateTeamData: CreateTeamDto = {
            activityDays: activityDaysArray,
            teamImg: teamImg,
            teamInfo: teamIntroduce,
            teamLocation: activityAddr,
            teamName: teamName,
            latitude: activityLat,
            longitude: activityLng,
          };

          const result = await UpdateTeamAPI(UpdateTeamData, teamId);

          if (result.code === 200) {
            alert("팀 정보를 수정하였습니다.");
            navigator("/team", { state: teamId });
          } else {
            if (result.response.data.code === 500) {
              alert(
                "예상하지 못 한 오류로 인해 팀 정보 수정을 실패하였습니다."
              );
            } else if (result.response.data.code !== 500) {
              alert(`에러 코드 : ${result.response.data.code}`);
            }
          }
        } else {
          return;
        }
      }
    }
  };

  return {
    teamName,
    setTeamName,
    teamIntroduce,
    setTeamIntroduce,
    teamFirstActDay,
    setTeamFirstActDay,
    teamSecondActDay,
    setTeamSecondActDay,
    activityAddr,
    setActivityAddr,
    activityLat,
    setActivityLat,
    activityLng,
    setActivityLng,
    handleAddressChange,
    handleSetLatLng,
    handleClickCreateTeam,
    teamImage,
    setTeamImage,
    teamImageRef,
    handleFileChange,
    handleTeamImageClick,
    teamNameSuccess,
    teamNameMsg,
    handleCheckTeamName,
    getNickNameMsgColor,
    geoLocation,
    teamInfo,
    handleGetTeamInfo,
    handleClickUpdateTeam,
  };
};

/* ------------------------------------------------------------------ */

export const useTeamEvent = (teamId: number) => {
  const navigator = useNavigate();

  const [team, setTeam] = useState<TeamListType>();

  // 팀 활동 장소 위도/경도 관리
  const [teamLat, setTeamLat] = useState(KakaoLat);
  const [teamLng, setTeamLng] = useState(KakaoLng);

  // 팀 정보 조회
  const handleGetTeam = async (teamId: number) => {
    const teamInfo = await GetTeamByIdAPI(teamId);
    setTeam(teamInfo);
  };

  // 요일 한글 매핑
  const dayToKorean = (day: string) => {
    switch (day) {
      case "monday":
        return "월요일";
      case "tuesday":
        return "화요일";
      case "wednesday":
        return "수요일";
      case "thursday":
        return "목요일";
      case "friday":
        return "금요일";
      case "saturday":
        return "토요일";
      case "sunday":
        return "일요일";
      default:
        return "";
    }
  };

  // 연령대 별 상태 관리
  const [age10, setAge10] = useState(0);
  const [age20, setAge20] = useState(0);
  const [age30, setAge30] = useState(0);
  const [age40, setAge40] = useState(0);
  const [age50, setAge50] = useState(0);
  const [ageEtc, setAgeEtc] = useState(0);

  // BarCharts로 넘겨줘야하는 연령대 데이터
  const ageData = [age10, age20, age30, age40, age50, ageEtc];

  // 팀 회원 연령대 집계
  const handleExtractAgeRange = ({ team }: { team: TeamListType }) => {
    let count10 = 0;
    let count20 = 0;
    let count30 = 0;
    let count40 = 0;
    let count50 = 0;
    let countEtc = 0;

    team.members.forEach((member) => {
      const ageRange = member.ageRange;

      if (ageRange === "10~19") {
        count10 += 1;
      } else if (ageRange === "20~29") {
        count20 += 1;
      } else if (ageRange === "30~39") {
        count30 += 1;
      } else if (ageRange === "40~49") {
        count40 += 1;
      } else if (ageRange === "50~59") {
        count50 += 1;
      } else {
        countEtc += 1;
      }
    });

    setAge10(count10);
    setAge20(count20);
    setAge30(count30);
    setAge40(count40);
    setAge50(count50);
    setAgeEtc(countEtc);
  };

  // 팀 게시글 리스트
  const [teamPostList, setTeamPostList] = useState<TeamPostListType[]>([]);

  // 팀 게시글 검색 조건
  const [page, setPage] = useState(1);
  const [content, setContent] = useState("");

  const [noMorePosts, setNoMorePosts] = useState(false);

  // 팀 게시글 조회
  const handleGetTeamPostList = async (teamId: number, resetList = false) => {
    const result = await GetTeamPostListAPI({ teamId, page, content });

    // 게시글 수가 10개 미만일 경우 더 이상 게시글이 없다는 표시
    if (result.length < 10) {
      setNoMorePosts(true);
    } else {
      setNoMorePosts(false);
    }

    // 검색어가 변경되었거나 페이지가 1일 경우 게시글 리스트 초기화
    if (resetList) {
      setTeamPostList(result); // 리스트 초기화 후 새로운 결과로 대체
    } else {
      setTeamPostList((prevPosts) => [...prevPosts, ...result]); // 기존 리스트에 결과 추가
    }
  };

  // 더 보기 버튼 클릭
  const handleClickMorePostBtn = () => {
    setPage((prevState) => prevState + 1);
  };

  // 팀 자격 상태
  const [teamAuth, setTeamAuth] = useState("");

  // 팀 자격 증명 로직
  const handleCheckTeamAuth = async () => {
    const auth = await TeamAuthCheckAPI(teamId);

    if (auth.role) {
      if (auth.leader) {
        setTeamAuth("leader");
      } else if (!auth.leader) {
        setTeamAuth("member");
      }
    } else {
      setTeamAuth("guest");
    }
  };

  // '팀 정보 수정' 클릭 시
  const handleGoToUpdateTeam = () => {
    navigator("/createteam", { state: teamId });
  };

  // 팀 게시글 클릭 시
  const handleGoToTeamPost = (teamBoardId: number) => {
    navigator("/teampost", { state: teamBoardId });
  };

  // 팀 게시글 작성 클릭 시
  const handleGoToWriteTeamPost = (teamId: number) => {
    navigator("/writeteampost", { state: teamId });
  };

  return {
    team,
    handleGetTeam,
    dayToKorean,
    handleExtractAgeRange,
    ageData,
    teamLat,
    teamLng,
    setTeamLat,
    setTeamLng,
    teamPostList,
    handleGetTeamPostList,
    content,
    setContent,
    page,
    setPage,
    handleClickMorePostBtn,
    noMorePosts,
    teamAuth,
    handleCheckTeamAuth,
    handleGoToUpdateTeam,
    handleGoToTeamPost,
    handleGoToWriteTeamPost,
  };
};
