import styled from "styled-components";
import { BtnColor } from "../../constants/FixValues";

export const Container = styled.div`
  width: calc(100% - 3rem);
  height: calc(100% - 2rem);

  display: flex;
  flex-direction: column;
  justify-content: start;

  padding: 1rem 1.5rem;

  box-shadow: 0 0 5px 1px rgb(10, 10, 10);

  background-color: #101010;
`;

export const TeamListHeader = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  align-items: end;
  justify-content: end;

  margin-bottom: 1rem;

  color: white;
  font-size: 1.3rem;
  font-weight: bold;

  background-color: transparent;
`;

export const TeamListUp = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  margin-top: 1rem;

  gap: 0.3rem;

  overflow: scroll;
  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE 및 Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  background-color: transparent;
`;

export const TeamName = styled.div`
  width: calc(100% - 2rem);
  height: calc(2.5rem - 1rem);

  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  background-color: transparent;
  border-radius: 0.5rem;

  color: white;
  font-size: 0.9rem;

  &:hover {
    background-color: ${BtnColor};
    box-shadow: 0 0 5px 1px rgb(10, 10, 10);

    cursor: pointer;
  }
`;
