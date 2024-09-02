import { CancleBtn, SignInBtn, SignUpBtn } from "../button/Button";
import { Auth, Category, Container, Details, Li, Summary, Ul } from "./styles";
import { NavagationType } from "./types";

export const Navigation = ({ toggleNav, isClosing }: NavagationType) => {
  return (
    <Container isClosing={isClosing}>
      <CancleBtn toggleNav={toggleNav} />
      <Category>
        <Details open>
          <Summary>&nbsp;&nbsp;Team</Summary>
          <Ul>
            <Li>팀 찾기</Li>
            <Li>팀 생성</Li>
          </Ul>
        </Details>
        <Details open>
          <Summary>&nbsp;&nbsp;Board</Summary>
          <Ul>
            <Li>게시판</Li>
            <Li>게시글 작성</Li>
          </Ul>
        </Details>
        <Details open>
          <Summary>&nbsp;&nbsp;MyPage</Summary>
          <Ul>
            <Li>내 정보</Li>
            <Li>내 정보 수정</Li>
          </Ul>
        </Details>
      </Category>
      <Auth>
        <SignInBtn />
        <SignUpBtn />
      </Auth>
    </Container>
  );
};
