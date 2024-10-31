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

export function ChatBot() {
  const { isStart, userInfo, handleGetUserInfo } = useChatBotEvent();

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  return (
    <Container>
      <TeamListArea>
        <TeamList />
      </TeamListArea>
      <ChatArea>
        {isStart && (
          <ChatRecord>
            <ChattingUser>
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
              <ChattingUserResult>
                hello world hello world hello world hello world hello world
              </ChattingUserResult>
            </ChattingUser>
            <ChattingAI>
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
              <ChattingAIResult>hello world</ChattingAIResult>
            </ChattingAI>
            <ChattingUser>
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
              <ChattingUserResult>
                hello world hello world hello world hello world hello world
              </ChattingUserResult>
            </ChattingUser>
            <ChattingAI>
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
              <ChattingAIResult>hello world</ChattingAIResult>
            </ChattingAI>
            <ChattingUser>
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
              <ChattingUserResult>
                hello world hello world hello world hello world hello world
              </ChattingUserResult>
            </ChattingUser>
            <ChattingAI>
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
              <ChattingAIResult>hello world</ChattingAIResult>
            </ChattingAI>
            <ChattingUser>
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
              <ChattingUserResult>
                hello world hello world hello world hello world hello world
              </ChattingUserResult>
            </ChattingUser>
            <ChattingAI>
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
              <ChattingAIResult>hello world</ChattingAIResult>
            </ChattingAI>
            <ChattingUser>
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
              <ChattingUserResult>
                hello world hello world hello world hello world hello world
              </ChattingUserResult>
            </ChattingUser>
            <ChattingAI>
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
              <ChattingAIResult>hello world</ChattingAIResult>
            </ChattingAI>
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
          <ChatBotInput />
        </SendArea>
      </ChatArea>
    </Container>
  );
}
