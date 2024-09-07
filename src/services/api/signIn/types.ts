export interface LocalSignInAPIType {
  email: string;
  password: string;
}

export interface KakaoSignInRedirectionAPIType {
  code: string | null;
}
