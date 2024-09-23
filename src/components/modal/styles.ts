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

  padding: 0.5rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.5rem;

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

  font-weight: bold;

  &:hover {
    cursor: pointer;

    border-radius: 0.5rem;

    background-color: gray;
  }
`;
