import { TeamList } from "../../components/teamList/TeamList";
import {
  ChatArea,
  ChatRecord,
  ChattingAI,
  ChattingImg,
  ChattingName,
  ChattingAIResult,
  ChattingUserResult,
  ChattingUser,
  ChattingUserInfo,
  Container,
  SendArea,
  TeamListArea,
  Comment,
  Welcome,
  Help,
  PlaceHolder,
} from "./styles";
import { GoHubot } from "react-icons/go";
import { ChatBotInput } from "../../components/input/Input";
import { useChatBotEvent } from "./events";
import { useEffect } from "react";
import { PacmanLoader } from "react-spinners";

export function ChatBot() {
  const {
    isStart,
    setIsStart,
    userInfo,
    handleGetUserInfo,
    handleClickSendPrompt,
    prompt,
    setPrompt,
    chatHistory,
    loading,
    handleRefreshChatHistory,
    endOfMessagesRef,
  } = useChatBotEvent();

  useEffect(() => {
    handleRefreshChatHistory(); // 화면 렌더링 시 누적된 채팅 기록 초기화
    setIsStart(false); // 초기 화면은 Welcome 멘트 출력
    handleGetUserInfo();
  }, []);

  // chatHistory가 변경될 때마다 스크롤을 맨 아래로 이동
  useEffect(() => {
    if (chatHistory.length > 0) {
      setIsStart(true); // 채팅 기록이 존재할 경우 채팅 화면으로 전환
    }

    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <Container>
      <TeamListArea>
        <TeamList />
      </TeamListArea>
      <ChatArea>
        {isStart && (
          <ChatRecord>
            {chatHistory.map((chat, index) =>
              chat.role === "user" ? (
                <ChattingUser key={index}>
                  <ChattingUserInfo>
                    <ChattingName>{userInfo?.name}</ChattingName>
                    <ChattingImg>
                      <img
                        src={userInfo?.profileImg}
                        alt="error"
                        style={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                          border: "1px solid white",
                        }}
                      />
                    </ChattingImg>
                  </ChattingUserInfo>
                  <ChattingUserResult>{chat.content}</ChattingUserResult>
                </ChattingUser>
              ) : (
                <ChattingAI key={index}>
                  <ChattingUserInfo>
                    <ChattingImg>
                      <GoHubot
                        style={{
                          width: "2rem",
                          height: "2rem",
                        }}
                        color="green"
                      />
                    </ChattingImg>
                    <ChattingName>Chat Bot</ChattingName>
                  </ChattingUserInfo>
                  <ChattingAIResult>
                    {loading && chat.content === "" ? (
                      <PacmanLoader size={10} color={"green"} />
                    ) : (
                      chat.content
                    )}
                  </ChattingAIResult>
                </ChattingAI>
              )
            )}
            {/* 항상 화면 하단에 있는 빈 div */}
            <div ref={endOfMessagesRef} style={{ height: "1rem" }} />
          </ChatRecord>
        )}
        {!isStart && (
          <Comment>
            <Welcome>{userInfo?.name}님, 안녕하세요</Welcome>
            <Help>어떤 팀을 찾고 계신가요?</Help>
            <PlaceHolder>
              ※ 원하시는 팀의 연령대, 팀의 활동 장소, 팀의 활동 요일을 기입하면
              더 적합한 팀을 찾을 수 있습니다.
            </PlaceHolder>
          </Comment>
        )}
        <SendArea>
          <ChatBotInput
            prompt={prompt}
            setPrompt={setPrompt}
            handleClickSendPrompt={handleClickSendPrompt}
          />
        </SendArea>
      </ChatArea>
    </Container>
  );
}
