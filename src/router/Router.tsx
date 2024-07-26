import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Main from "../pages/main/Main";
import Landing from "../pages/landing/Landing";

// 프로젝트 내의 모든 페이지들 관리
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "/main",
        element: <Main />,
      },
    ],
  },
]);
