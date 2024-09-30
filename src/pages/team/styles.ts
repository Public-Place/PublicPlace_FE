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
  flex-direction: column;

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
