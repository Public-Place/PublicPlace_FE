import {
  LeftMiddleText,
  LeftSmallText,
  PageCenterText,
} from "../../components/text/Text";
import {
  EditTeamBox,
  EditTeamBtn,
  LeftInfoBottom,
  LeftInfoTop,
  PostingDay,
  SideInfoBox,
  SideInfoLeft,
  SideInfoRight,
  TeamContainer,
  TeamPostBox,
  TeamPostComment,
  TeamPostContent,
  TeamPostImage,
  TeamPostWriter,
  Wrapper,
  WriterName,
  WriterProfileImg,
} from "./styles";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { LuPencilLine } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";
import KakaoMap from "../../components/map/KakaoMap";
import { SearchPost } from "../../components/input/Input";
import DefaultProfile from "../../assets/images/Profile.png";
import BackGround from "../../assets/images/background.png";
import { AiOutlineComment } from "react-icons/ai";

export const Team = () => {
  return (
    <TeamContainer>
      <SideInfoLeft>
        <LeftInfoTop>{/* img 태그 */}</LeftInfoTop>
        <LeftInfoBottom>
          <LeftMiddleText text={"수원삼성블루윙즈"} />
          <LeftSmallText text={"총원 36명"} />
          <LeftSmallText text={'"팀 한 줄 소개"'} />
          <hr
            style={{
              width: "100%",
              marginBlock: "1rem",
            }}
          />
          <EditTeamBox>
            <EditTeamBtn>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <IoSettingsOutline />
                <LeftSmallText text="팀 정보 수정" />
              </div>
            </EditTeamBtn>
            <EditTeamBtn>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <CiSquarePlus />
                <LeftSmallText text="팀 가입하기" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <LuPencilLine />
                <LeftSmallText text="게시글 작성" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <LuUserPlus />
                <LeftSmallText text="가입 요청" />
              </div>
            </EditTeamBtn>
          </EditTeamBox>
        </LeftInfoBottom>
      </SideInfoLeft>
      <Wrapper>
        <PageCenterText text={"팀 게시글"} />
        <SearchPost placeholder={"게시글 내용을 검색하세요."} />
        <div
          style={{
            height: "1.5rem",
          }}
        ></div>
        <TeamPostBox>
          <TeamPostWriter>
            <WriterProfileImg>
              <img
                src={DefaultProfile}
                alt="Error"
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
              />
            </WriterProfileImg>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                flexDirection: "column",
                marginLeft: "1rem",
                backgroundColor: "transparent",
                gap: "0.2rem",
              }}
            >
              <WriterName>염기훈</WriterName>
              <PostingDay>2024년</PostingDay>
            </div>
          </TeamPostWriter>
          <TeamPostContent>
            [오피셜] 염기훈 감독대행, 제 9대 수원삼성 감독 선임
            <br />
            수원삼성블루윙즈 축구단이 염기훈 감독을 제 9대 수원삼성 감독으로
            선임했습니다.
            <br />
            염기훈 감독 소감 : 어려운 상황이지만 우리 팬들이 있는 한 무거운
            책임감으로 K리그1 재진입이라는 목표를 향해 달려가겠습니다.
          </TeamPostContent>
          <TeamPostImage>
            <img
              src={BackGround}
              alt="Error"
              style={{
                width: "100%",
                height: "fit-content",
                objectFit: "cover",
              }}
            />
          </TeamPostImage>
          <TeamPostComment>
            <AiOutlineComment size={20} />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              336
            </span>
          </TeamPostComment>
        </TeamPostBox>
        <TeamPostBox>
          <TeamPostWriter>
            <WriterProfileImg>
              <img
                src={DefaultProfile}
                alt="Error"
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
              />
            </WriterProfileImg>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                flexDirection: "column",
                marginLeft: "1rem",
                backgroundColor: "transparent",
                gap: "0.2rem",
              }}
            >
              <WriterName>염기훈</WriterName>
              <PostingDay>2024년</PostingDay>
            </div>
          </TeamPostWriter>
          <TeamPostContent>
            [오피셜] 염기훈 감독대행, 제 9대 수원삼성 감독 선임
            <br />
            수원삼성블루윙즈 축구단이 염기훈 감독을 제 9대 수원삼성 감독으로
            선임했습니다.
            <br />
            염기훈 감독 소감 : 어려운 상황이지만 우리 팬들이 있는 한 무거운
            책임감으로 K리그1 재진입이라는 목표를 향해 달려가겠습니다.
          </TeamPostContent>
          <TeamPostImage>
            <img
              src={BackGround}
              alt="Error"
              style={{
                width: "100%",
                height: "fit-content",
                objectFit: "cover",
              }}
            />
          </TeamPostImage>
          <TeamPostComment>
            <AiOutlineComment size={20} />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              336
            </span>
          </TeamPostComment>
        </TeamPostBox>
        <TeamPostBox>
          <TeamPostWriter>
            <WriterProfileImg>
              <img
                src={DefaultProfile}
                alt="Error"
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
              />
            </WriterProfileImg>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                flexDirection: "column",
                marginLeft: "1rem",
                backgroundColor: "transparent",
                gap: "0.2rem",
              }}
            >
              <WriterName>염기훈</WriterName>
              <PostingDay>2024년</PostingDay>
            </div>
          </TeamPostWriter>
          <TeamPostContent>
            [오피셜] 염기훈 감독대행, 제 9대 수원삼성 감독 선임
            <br />
            수원삼성블루윙즈 축구단이 염기훈 감독을 제 9대 수원삼성 감독으로
            선임했습니다.
            <br />
            염기훈 감독 소감 : 어려운 상황이지만 우리 팬들이 있는 한 무거운
            책임감으로 K리그1 재진입이라는 목표를 향해 달려가겠습니다.
          </TeamPostContent>
          <TeamPostImage>
            <img
              src={BackGround}
              alt="Error"
              style={{
                width: "100%",
                height: "fit-content",
                objectFit: "cover",
              }}
            />
          </TeamPostImage>
          <TeamPostComment>
            <AiOutlineComment size={20} />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              336
            </span>
          </TeamPostComment>
        </TeamPostBox>
      </Wrapper>
      <SideInfoRight>
        <SideInfoBox>
          <LeftMiddleText text={"팀 정보"} />
          <LeftSmallText text={"회장 : 이재용"} />
          <LeftSmallText text={"창단일 : 1995년 12월 15일"} />
          <LeftSmallText text={"활동 요일 : 토요일, 일요일"} />
        </SideInfoBox>
        <SideInfoBox>
          <LeftMiddleText text={"팀원 나이 분포도"} />
          <div
            style={{
              width: "100%",
              height: "15rem",
              border: "1px solid white",
              borderRadius: "1rem",
              textAlign: "center",
            }}
          ></div>
        </SideInfoBox>
        <SideInfoBox>
          <LeftMiddleText text={"팀 활동 장소"} />
          <KakaoMap handler={() => {}} />
        </SideInfoBox>
      </SideInfoRight>
    </TeamContainer>
  );
};
