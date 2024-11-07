import styled, { keyframes } from "styled-components";

// 서서히 나타나는 애니메이션
const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8); /* 살짝 축소된 상태로 시작 */
  }
  100% {
    opacity: 1;
    transform: scale(1); /* 원래 크기로 확대 */
  }
`;

export const InterestContainer = styled.div`
  width: calc(17rem - 4rem);
  height: calc(20rem - 6rem);

  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  border-radius: 1rem;
  box-shadow: 0 0 5px 1px rgb(10, 10, 10);

  background-color: #242424;

  animation: ${appear} 0.8s ease-out forwards;
  opacity: 0;
`;
