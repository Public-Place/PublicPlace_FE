import styled from "styled-components";
import { DefaultBackgroundColor } from "../../constants/FixValues";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${DefaultBackgroundColor};
`;

export const TeamListArea = styled.div`
  width: 15%;
  height: 100%;

  background-color: transparent;
`;

export const ChatArea = styled.div`
  width: calc(85% - 30rem);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  position: relative;

  padding: 0rem 15rem;

  background-color: transparent;
`;

export const ChatRecord = styled.div`
  width: 100%;
  height: calc(90% - 3rem);

  padding-top: 3rem;

  overflow-y: auto;
  -ms-overflow-style: none; /* IE 및 Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  background-color: transparent;
`;

export const ChattingAI = styled.div`
  width: calc(100% - 2px - 2rem);
  height: fit-content;

  padding: 1rem 1rem;
  margin-bottom: 0rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  color: white;
`;

export const ChattingUser = styled.div`
  width: calc(100% - 2px - 2rem);
  height: fit-content;

  padding: 1rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  color: white;
`;

export const ChattingUserInfo = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  gap: 1rem;

  background-color: transparent;
`;

export const ChattingImg = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
`;

export const ChattingName = styled.div`
  width: fit-content;
  height: fit-content;

  color: white;
  font-weight: bold;
  font-size: 1rem;
`;

export const ChattingAIResult = styled.div`
  width: 90%;
  height: fit-content;

  padding: 0.5rem 0rem;
  margin-left: 3rem;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;

  color: white;
  font-size: 0.8rem;

  background-color: transparent;
`;

export const ChattingUserResult = styled.div`
  width: 90%;
  height: fit-content;

  padding: 0.5rem 0rem;
  margin-right: 3rem;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: end;

  color: white;
  font-size: 0.8rem;

  background-color: transparent;
`;

export const SendArea = styled.div`
  width: calc(100% - 30rem);
  height: 10%;

  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 0.5px solid white;

  color: white;

  background-color: transparent;
`;

export const Comment = styled.div`
  width: calc(100%);
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  position: relative;

  color: white;

  background-color: transparent;
`;

export const Welcome = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: end;

  padding-right: 7rem;

  font-size: 40px;
  font-weight: bold;

  background: linear-gradient(270deg, #2b4d34, white, #2b4d34);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientAnimation 3s ease infinite, fadeIn 2s ease-out forwards;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Help = styled.div`
  width: fit-content;
  height: fit-content;

  margin-bottom: 10rem;
  padding-right: 7rem;

  display: flex;
  align-items: center;
  justify-content: end;

  font-size: 40px;
  font-weight: bold;
  animation: fadeIn 2s ease-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const PlaceHolder = styled.div`
  width: calc(100% - 2rem);
  height: fit-content;

  padding: 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;

  font-size: 0.8rem;
  color: gray;

  background-color: transparent;
`;
