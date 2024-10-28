import styled from "styled-components";

export const JoinInfoBox = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;
