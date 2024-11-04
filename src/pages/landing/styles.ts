import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const DotsContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "whitesmoke" : "#343434")};
  transition: background-color 0.3s;

  border: 0.1px solid white;

  &:hover {
    cursor: pointer;
  }
`;
