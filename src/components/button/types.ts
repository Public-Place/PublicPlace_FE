export interface HambergerBtnType {
  toggleNav: () => void;
}

export interface CancleBtnType {
  toggleNav: () => void;
}

export interface SignInBtnType {
  handleSignIn: () => void;
}

export interface SignUpBtnType {
  handleSignUp: () => void;
}

// 회원가입 창 입력값들 로그 출력을 위한 테스트 인터페이스
export interface CheckValues {
  handleCheckValues: () => void;
}

export interface KakaoSignInType {
  handleKakaoSignInAPI: () => void;
}
