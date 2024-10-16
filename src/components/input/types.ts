// 로그인 팝업창도 마무리 되면 ? 삭제
export interface SignUpInputType {
  value?: string;
  setValue?: (value: string) => void;
}

export interface ProfileInputType {
  src: string;
  handleProfileClick: () => void;
}

export interface PostImageInputType {
  src: string;
  handlePostImageClick: () => void;
}

export interface SearchPostType {
  value?: string;
  setValue?: (value: string) => void;
  handler?: () => void;
  placeholder: string;
}
