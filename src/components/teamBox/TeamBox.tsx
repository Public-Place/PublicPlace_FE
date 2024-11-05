import { TeamBoxContainer } from "./styles";
import TeamImg from "../../assets/images/TeamImg.png";

export const TeamBox = () => {
  return (
    <TeamBoxContainer>
      <img
        src={TeamImg}
        alt="error"
        style={{
          width: "100%",
          height: "6rem",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          marginTop: "8px",
          paddingLeft: "1px",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        서천FC
      </div>
      <div
        style={{
          marginTop: "3px",
          paddingLeft: "1px",
          fontSize: "0.6rem",
        }}
      >
        창단일 : 2024년 11월 5일
      </div>
      <div
        style={{
          marginTop: "3px",
          paddingLeft: "1px",
          fontSize: "0.6rem",
        }}
      >
        활동 장소 : 경기도 용인시 기흥구 서천서로 27
      </div>
      <div
        style={{
          marginTop: "3px",
          paddingLeft: "1px",
          fontSize: "0.6rem",
        }}
      >
        회원 수 : 48명
      </div>
    </TeamBoxContainer>
  );
};
