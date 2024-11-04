// src/@types/react-fullpage.d.ts
declare module "@fullpage/react-fullpage" {
  import * as React from "react";

  interface Credits {
    enabled: boolean; // 또는 다른 필요한 속성 정의
  }

  interface FullpageProps {
    scrollingSpeed?: number;
    anchors?: string[];
    onLeave?: (origin: any, destination: any) => void;
    render?: (data: any) => React.ReactNode;
    credits?: Credits; // 객체 형태로 정의
  }

  export default class ReactFullpage extends React.Component<FullpageProps> {
    static Wrapper: any;
  }
}
