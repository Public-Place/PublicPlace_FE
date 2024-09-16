import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding: 1.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: transparent;
`;

export const LeftAndRightBtn = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.5rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const PageRange = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.5rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const SpecificPage = styled.span`
  width: fit-content;
  height: fit-content;

  padding: 0rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;
