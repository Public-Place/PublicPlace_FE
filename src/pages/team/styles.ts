import styled from "styled-components";
import { DefaultBackgroundColor } from "../../constants/FixValues";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  color: white;

  background-color: ${DefaultBackgroundColor};
`;

export const TeamDetail = styled.div`
  width: 100%;
  height: 55%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: row;

  position: relative;

  background-color: transparent;
`;

export const TeamInfo = styled.div`
  width: calc(40% - 20rem);
  height: 100%;

  padding: 0rem 10rem;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  position: relative;

  white-space: nowrap;

  background-color: transparent;
`;

export const TeamImage = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const TeamSort = styled.div`
  width: calc(100% - 8rem);
  height: 45%;

  padding: 0rem 4rem;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  background-color: transparent;
`;

export const TeamFilter = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: transparent;
`;

export const TeamFilterLeft = styled.div`
  width: 10rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: transparent;
`;

export const TeamFilterRight = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;

  gap: 1rem;

  background-color: transparent;
`;

export const TeamBoxArea = styled.div`
  width: 100%;
  height: 100%;

  padding: 0rem 4rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  gap: 2rem;

  background-color: transparent;
`;

export const MorePost = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: transparent;
`;

export const Filter = styled.div<{ auth: boolean }>`
  width: 100%;
  height: fit-content;
  min-height: 80%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  filter: ${(props) => (props.auth ? "blur(6px)" : "none")};

  background-color: transparent;
`;

/* ------------------------------------------------ */
export const TeamName = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 2rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background-color: transparent;
`;

export const TeamInformation = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 2rem;

  gap: 1rem;

  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: row;

  background-color: transparent;
`;

export const TeamIntroduceBox = styled.div`
  width: 80%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;

export const TeamActivityDay = styled.div`
  width: 20%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;

export const TeamStadium = styled.div`
  width: 50%;
  height: fit-content;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;

export const TeamContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: row;

  position: relative;

  color: white;

  background-color: ${DefaultBackgroundColor};
`;

export const SideInfoLeft = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;

  background-color: transparent;
`;

export const LeftInfoTop = styled.div`
  width: 15rem;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;

  background-color: transparent;
`;

export const LeftInfoBottom = styled.div`
  width: 15rem;
  height: fit-content;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;

export const SideInfoRight = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  position: fixed;
  top: 0;
  right: 0;

  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: calc(40% - 2rem);
  height: 100%;

  padding: 0rem 1rem;

  overflow: scroll;
  scrollbar-width: none;

  background-color: transparent;
`;

export const EditTeamBox = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: row;

  background-color: transparent;
`;

export const EditTeamBtn = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  gap: 0.3rem;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const SideInfoBox = styled.div`
  width: 70%;
  height: fit-content;

  padding: 1.5rem 2rem;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  gap: 0.5rem;

  border: 1px solid white;
  border-radius: 1rem;
`;

export const TeamPostBox = styled.div`
  width: calc(100% - 2rem);
  height: fit-content;

  padding: 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;

  border: 1px solid white;
  border-radius: 1rem;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const TeamPostWriter = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  background-color: transparent;
`;

export const WriterProfileImg = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WriterName = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  color: white;

  background-color: transparent;
`;

export const PostingDay = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.6rem;
  color: gray;

  background-color: transparent;
`;

export const TeamPostContent = styled.div`
  width: calc(100% - 0.4rem);
  height: fit-content;

  padding: 0rem 0.2rem;

  font-size: 0.9rem;
  line-height: 1.5rem;

  background-color: transparent;
`;

export const TeamPostImage = styled.div`
  width: 100%;
  height: fit-content;

  background-color: transparent;
`;

export const TeamPostComment = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: end;

  background-color: transparent;
`;
