import styled from "styled-components";

export const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  gap: 0.5rem;
`;

export const SmallTitle = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.3rem;

  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

export const Msg = styled.span`
  width: fit-content;
  height: fit-content;

  margin-left: 0.5rem;

  font-size: 0.6rem;
`;

export const UserName = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.5rem 0rem;

  font-size: 1.5rem;
  font-weight: bold;

  background-color: transparent;
`;

export const UserInfo = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.5rem 0rem;

  font-size: 1rem;

  background-color: transparent;
`;

export const TeamState = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.5rem 1rem;

  font-size: 1.7rem;
  font-weight: bold;
  color: white;

  background-color: transparent;
`;

export const TeamName = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.2rem 0rem;

  font-size: 0.8rem;
  font-weight: bold;

  color: black;

  background-color: transparent;
`;

export const TeamDetail = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.2rem 0rem;

  font-size: 0.5rem;

  color: black;

  background-color: transparent;
`;

export const Notice = styled.div`
  width: calc(100% - rrem);
  height: fit-content;

  padding: 1rem 2rem;

  font-size: 0.7rem;
  color: gray;

  background-color: transparent;
`;

export const PageCenterTitle = styled.div`
  width: 100%;
  height: fit-content;

  padding: 2rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2rem;
  font-weight: bold;
`;

export const PageLeftTitle = styled.div`
  width: fit-content;
  height: fit-content;

  padding-top: 1.5rem;
  padding-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: start;

  font-size: 2rem;
  font-weight: bold;
`;
