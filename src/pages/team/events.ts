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
  SuccessMsgColor,
} from "../../constants/FixValues";

export const useSearchTeamEvent = () => {
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

  // 중복 확인 관련 상태
  const [teamNameSuccess, setTeamNameSuccess] = useState<boolean | null>(null);
  const [teamNameMsg, setTeamNameMsg] = useState("");

  // Kakao Map ChangeEventHandler
  const handleAddressChange = (addr: string) => {
    setActivityAddr(addr);
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

          // DTO 생성 후 필드 별로 매핑 작업
          const CreateTeamData: CreateTeamDto = {
            activityDays: [teamFirstActDay, teamSecondActDay],
            teamImg: teamImg,
            teamInfo: teamIntroduce,
            teamLocation: activityAddr,
            teamName: teamName,
          };

          // POST Mapping 작업
          const result = await CreateTeamAPI(CreateTeamData);

          if (!result) {
            alert("중복된 팀 이름입니다.");
          } else if (result.success) {
            navigator("/searchteam");
            window.location.reload();
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
  }: CheckDuplicationType) => {
    if (!teamName) {
      alert("팀 이름을 입력한 후 중복 여부를 확인해주세요.");
    } else {
      const result = await TeamNameCheckAPI(teamName);
      console.log("result : ", result);

      setTeamNameSuccess(result.success);
      setTeamNameMsg(result.msg);
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
    handleAddressChange,
    handleClickCreateTeam,
    teamImage,
    teamImageRef,
    handleFileChange,
    handleTeamImageClick,
    teamNameSuccess,
    teamNameMsg,
    handleCheckTeamName,
    getNickNameMsgColor,
  };
};
