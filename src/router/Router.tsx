import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Main from "../pages/main/Main";
import Redirection from "../pages/redirection/Redirection";
import MyInfo from "../pages/myinfo/MyInfo";

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
        // 내 정보 페이지
        path: "/myinfo",
        element: <MyInfo />,
      },
    ],
  },
]);
