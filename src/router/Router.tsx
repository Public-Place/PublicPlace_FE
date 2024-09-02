import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Main from "../pages/main/Main";

// 프로젝트 내의 모든 페이지들 관리
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
]);
