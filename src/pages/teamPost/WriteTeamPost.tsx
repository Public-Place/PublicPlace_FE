import { useLocation } from "react-router-dom";
import { Advertisement, Container, Wrapper } from "../post/styles";
import { InputTitle, PageCenterText } from "../../components/text/Text";
import { TeamInformation, TeamName, TeamStadium } from "../team/styles";
import {
  TeamImageInput,
  TeamPostContent,
  TeamStadiumInput,
} from "../../components/input/Input";
import KakaoMap from "../../components/map/KakaoMap";
import { GreenBtn } from "../../components/button/Button";
import { useWriteTeamPostEvent } from "./events";
import { useEffect } from "react";
import { KakaoLat, KakaoLng } from "../../constants/FixValues";

export default function WriteTeamPost() {
  const location = useLocation();
  const { teamId, postId } = location.state;

  const {
    content,
    setContent,
    activityAddr,
    activityLat,
    activityLng,
    attachImg,
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
  } = useWriteTeamPostEvent();

  useEffect(() => {
    handleGetTeamPost(postId);
  }, []);

  useEffect(() => {
    if (teamPost) {
      // isCreateType이 false일 경우 teamPost 정보 렌더링
      console.log("teamPost : ", teamPost);
    }
  }, [teamPost]);

  useEffect(() => {
    if (teamId) {
      setIsCreateType(true);
    }
    if (postId) {
      setIsCreateType(false);
    }
  }, [teamId, postId]);

  // 위치 정보가 로드되면 activityLat, activityLng 값을 업데이트
  useEffect(() => {
    // geoLocation이 로드되고, 좌표 정보가 존재할 때만 사용자 위치로 좌표를 설정
    if (
      geoLocation.loaded &&
      geoLocation.coordinates &&
      activityLat === KakaoLat && // 초기값과 비교하여 기본 좌표인 경우만 업데이트
      activityLng === KakaoLng
    ) {
      handleSetLatLng(geoLocation.coordinates.lat, geoLocation.coordinates.lng);
    }
  }, [geoLocation, handleSetLatLng, activityLat, activityLng]);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <PageCenterText
          text={isCreateType ? "팀 게시글 작성" : "팀 게시글 수정"}
        />
        <TeamName>
          <InputTitle text={"게시글 내용"} />
          <TeamPostContent value={content} setValue={setContent} />
        </TeamName>
        <hr style={{ width: "100%", marginTop: "2rem" }} />
        <TeamInformation>
          <TeamStadium>
            <InputTitle text={"활동 장소"} />
            <TeamStadiumInput value={activityAddr} />
            <div style={{ width: "100%", height: "1rem" }}>{/* 간격 */}</div>
            <KakaoMap
              handleAddressChange={handleAddressChange}
              handleSetLatLng={handleSetLatLng}
              Lat={activityLat}
              Lng={activityLng}
            />
          </TeamStadium>
          <TeamStadium>
            <InputTitle text={"첨부 이미지"} />
            <TeamImageInput
              src={attachImg}
              handleProfileClick={handleTeamImageClick}
            />
            <input
              type="file"
              style={{ display: "none" }}
              ref={attachImgRef}
              onChange={handleFileChange}
              accept="image/*"
            />
          </TeamStadium>
        </TeamInformation>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <GreenBtn
            text={isCreateType ? "작성하기" : "수정하기"}
            onClick={
              isCreateType
                ? () => handleClickWriteTeamPost(teamId)
                : () => alert("수정하기 클릭")
            }
          />
        </div>
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
}
