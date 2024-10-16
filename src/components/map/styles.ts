import styled from "styled-components";

export const KakaoMapContainer = styled.div<{ height?: string }>`
  width: 100%;
  height: ${(props) => props.height || "11rem"};
  border: 1px solid white;
  border-radius: 0.3rem;
`;
