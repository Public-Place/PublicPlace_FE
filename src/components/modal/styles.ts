import styled from "styled-components";
import { MobileScreen, ModalColor } from "../../constants/FixValues";

export const ModalTitle = styled.div`
  width: 20rem;
  height: fit-content;

  padding: 1rem 0rem;

  @media (max-width: ${MobileScreen}) {
    width: 15rem;
  }
`;

export const ModalInput = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "20rem"};
  height: fit-content;

  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${MobileScreen}) {
    width: 15rem;
  }
`;

export const ModalSelect = styled.div`
  width: 20rem;
  height: fit-content;

  padding: 0rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: ${MobileScreen}) {
    width: 15rem;
  }
`;

export const ModalButton = styled.div`
  width: 20rem;
  height: fit-content;

  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${MobileScreen}) {
    width: 15rem;
  }
`;

export const KebabContainer = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.3rem 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.3rem;

  background-color: ${ModalColor};
  color: white;

  border: 1px solid white;
  border-radius: 1rem;

  position: absolute;
  top: 35px;
  right: 0px;
`;

export const KebabContent = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.5rem 1rem;

  white-space: nowrap;

  background-color: transparent;

  font-size: 0.8rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;

    border-radius: 0.7rem;

    background-color: gray;
  }
`;

export const RulesDetail = styled.div`
  width: 100%;
  height: fit-content;

  background-color: transparent;

  font-size: 0.8rem;
`;

export const JoinUserBox = styled.div`
  width: calc(100% - 2.4rem);
  height: 5rem;

  padding: 0rem 1.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  gap: 1.2rem;

  border-radius: 0.5rem;

  background-color: rgb(35, 35, 35);
  box-shadow: 0 0 5px 1px rgb(10, 10, 10);

  &:hover {
    cursor: pointer;
  }
`;

export const JoinUserProfile = styled.div`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JoinUserInfo = styled.div`
  width: fit-content;
  height: 3rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  background-color: transparent;
`;
