import styled from "styled-components";
import { DefaultBackgroundColor } from "../../constants/FixValues";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;

  display: flex;
  align-items: start;
  justify-content: center;

  color: white;
  background-color: ${DefaultBackgroundColor};
`;

export const Advertisement = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  background-color: transparent;
`;

export const SetInfo = styled.div`
  width: 100%;
  height: fit-content;

  padding: 2rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SetInfoTop = styled.div`
  width: 100%;
  height: fit-content;

  padding: 1rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: transparent;
`;

export const SetInfoBottom = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;

export const SetProfile = styled.div`
  width: 50%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;

export const SetInfo01 = styled.div`
  width: 50%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
  border-bottom: 1px solid white;
`;

export const SetInfo02 = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;

export const SetInfo03 = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const InfoTitle = styled.div`
  width: 100%;
  height: fit-content;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoInput = styled.div`
  width: 100%;
  height: fit-content;

  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoSelect = styled.div`
  width: 30%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
