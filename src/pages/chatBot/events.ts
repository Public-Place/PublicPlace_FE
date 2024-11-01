import { useRef, useState } from "react";
import { UserInfoType } from "../myinfo/types";
import { GetUserAPI } from "../../services/api/user/GetUserAPI";
import { ChatGPTAPI } from "../../services/api/chatGPT/ChatGPTAPI";
import { ChatResponseType } from "./types";

export const useChatBotEvent = () => {
  // 회원 정보
  const [userInfo, setUserInfo] = useState<UserInfoType>();

  // 회원 정보 조회
  const handleGetUserInfo = async () => {
    const result = await GetUserAPI();
    setUserInfo(result);
  };

  // 채팅 시작 유무
  const [isStart, setIsStart] = useState<boolean>(true);

  // 질문
  const [prompt, setPrompt] = useState("");

  // 채팅 기록
  const [chatHistory, setChatHistory] = useState<ChatResponseType[]>([]);

  // 로딩 상태
  const [loading, setLoading] = useState<boolean>(false);

  // 질문 전송 버튼 클릭 시
  const handleClickSendPrompt = async () => {
    if (loading) return; // 이미 로딩 중이라면 함수 종료

    // 채팅 기록에 누적 저장
    setChatHistory((prev) => [
      ...prev,
      { role: "user", content: prompt },
      { role: "assistant", content: "" },
    ]);
    setLoading(true);
    setPrompt("");

    // ChatGPT 응답
    try {
      const result = await ChatGPTAPI(prompt);

      if (result) {
        // AI 응답으로 채팅 기록 업데이트
        setChatHistory((prev) => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1] = {
            role: "assistant",
            content: result[2].content, // AI의 응답으로 업데이트
          };
          return newHistory;
        });
      }
    } catch (error) {
      // console.error("error :", error);
      alert("에러 발생 : " + error);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  // 채팅 기록이 화면의 height 초과할 시 자동 화면 스크롤을 위한 Ref
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  return {
    isStart,
    setIsStart,
    userInfo,
    handleGetUserInfo,
    handleClickSendPrompt,
    prompt,
    setPrompt,
    chatHistory,
    loading,
    endOfMessagesRef,
  };
};
