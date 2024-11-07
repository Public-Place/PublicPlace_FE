import { TeamBoxContainer } from "./styles";
import { TeamBoxType } from "./MockUp";

export const TeamBox = ({ team }: TeamBoxType) => {
  return (
    <TeamBoxContainer>
      <img
        src={team.teamImg}
        alt="error"
        style={{
          width: "100%",
          height: "8rem",
          objectFit: "cover",
          borderRadius: "10px",
          border: "0.5px solid black",
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

          whiteSpace: "nowrap",
          overflow: "hidden",
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
