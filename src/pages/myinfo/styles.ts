import styled from "styled-components";
import { DefaultBackgroundColor } from "../../constants/FixValues";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;

  display: flex;
  align-items: start;
  justify-content: center;

  background-color: ${DefaultBackgroundColor};
`;

export const Advertisement = styled.div`
  width: 15%;
  height: fit-content;

  padding: 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 70%;
  height: fit-content;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: row;

  background-color: transparent;
`;

export const UserInfoArea = styled.div`
  width: 35%;
  height: fit-content;

  padding: 0rem 2rem;

  background-color: transparent;
`;

export const UserMainInfo = styled.div`
  width: 100%;
  height: fit-content;

  padding: 2rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  color: white;

  background-color: transparent;
`;

export const UserProfileArea = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const UserNameArea = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;

export const UserSubInfo = styled.div`
  width: calc(100% - 4rem);
  height: fit-content;

  padding: 2rem 2rem;

  color: white;

  border-top: 1px solid white;
  border-bottom: 1px solid white;

  background-color: transparent;
`;

export const TeamInfoArea = styled.div`
  width: 65%;
  height: 100%;

  padding: 0rem 2rem;

  background-color: transparent;
`;

export const TeamStateArea = styled.div`
  width: calc(100% - 0rem);
  height: fit-content;
  min-height: 23rem;

  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  padding: 1rem 0rem;

  background-color: transparent;
`;

export const TeamSortArea = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;

  overflow: hidden;
`;

export const TeamBox = styled.div`
  width: calc(25% - 2rem);
  height: fit-content;

  margin: 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem;

  background-color: white;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
