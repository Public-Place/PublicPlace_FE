import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Main from "../pages/main/Main";
import Redirection from "../pages/redirection/Redirection";
import MyInfo from "../pages/myinfo/MyInfo";
import { UpdateMyInfo } from "../pages/updateMyInfo/UpdateMyInfo";
import Board from "../pages/board/Board";
import Post from "../pages/post/Post";
import WritePost from "../pages/post/WritePost";
import SearchTeam from "../pages/team/SearchTeam";
import CreateTeam from "../pages/team/CreateTeam";
import { Team } from "../pages/team/Team";
import TeamPost from "../pages/teamPost/TeamPost";
import WriteTeamPost from "../pages/teamPost/WriteTeamPost";

/*
  페이지 경로 이름 작성 규칙
  1. 소문자로만 작성할 것
  2. 단어 간 구분 문자가 필요할 시 UnderLine(_) 사용
*/

// 프로젝트 내의 모든 페이지들 관리
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        // 메인 페이지
        path: "",
        element: <Main />,
      },
      {
        // 카카오 로그인을 위한 리다이렉션 페이지
        path: "/api/v1/kakao/callback",
        element: <Redirection />,
      },
      {
        // 팀 찾기 페이지
        path: "/searchteam",
        element: <SearchTeam />,
      },
      {
        // 팀 생성 페이지
        path: "/createteam",
        element: <CreateTeam />,
      },
      {
        // 팀 페이지
        path: "/team",
        element: <Team />,
      },
      {
        // 팀 게시글 페이지
        path: "teampost",
        element: <TeamPost />,
      },
      {
        // 팀 게시글 작성 페이지
        path: "writeteampost",
        element: <WriteTeamPost />,
      },
      {
        // 게시판 페이지
        path: "/board",
        element: <Board />,
      },
      {
        // 게시글 작성 페이지
        path: "/writepost",
        element: <WritePost />,
      },
      {
        // 게시글 페이지
        path: "/post",
        element: <Post />,
      },
      {
        // 내 정보 페이지
        path: "/myinfo",
        element: <MyInfo />,
      },
      {
        // 내 정보 수정 페이지
        path: "/updatemyinfo",
        element: <UpdateMyInfo />,
      },
    ],
  },
]);
