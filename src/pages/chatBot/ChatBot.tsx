import { TeamList } from "../../components/teamList/TeamList";
import { ChatArea, ChatRecord, Container, TeamListArea } from "./styles";

export function ChatBot() {
  return (
    <Container>
      <TeamListArea>
        <TeamList />
      </TeamListArea>
      <ChatArea>
        <ChatRecord>
          <div>채팅 구역 디자인</div>
        </ChatRecord>
      </ChatArea>
    </Container>
  );
}
