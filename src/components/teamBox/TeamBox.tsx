import { TeamBoxContainer } from "./styles";
import TeamImg from "../../assets/images/TeamImg.png";
import { TeamBoxType } from "./MockUp";

export const TeamBox = ({ team }: TeamBoxType) => {
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
          marginTop: "2px",
          paddingLeft: "1px",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        {team.teamName}
      </div>
      <div
        style={{
          marginTop: "3px",
          paddingLeft: "1px",
          fontSize: "0.6rem",
        }}
      >
        창단일 : {team.createdAt}
      </div>
      <div
        style={{
          marginTop: "3px",
          paddingLeft: "1px",
          fontSize: "0.6rem",
        }}
      >
        활동 장소 : {team.location}
      </div>
      <div
        style={{
          marginTop: "3px",
          paddingLeft: "1px",
          fontSize: "0.6rem",
        }}
      >
        회원 수 : {team.memberCount}명
      </div>
    </TeamBoxContainer>
  );
};
