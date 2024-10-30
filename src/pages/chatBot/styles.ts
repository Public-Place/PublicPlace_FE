import styled from "styled-components";
import { DefaultBackgroundColor } from "../../constants/FixValues";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${DefaultBackgroundColor};
`;

export const TeamListArea = styled.div`
  width: 15%;
  height: 100%;

  background-color: transparent;
`;

export const ChatArea = styled.div`
  width: calc(85% - 30rem);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  padding: 0rem 15rem;

  background-color: transparent;
`;

export const ChatRecord = styled.div`
  width: 100%;
  height: 10rem;

  background-color: red;
`;
