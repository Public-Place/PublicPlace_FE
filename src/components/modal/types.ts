import { Dispatch, SetStateAction } from "react";

export interface SignInModalType {
  isSignInModalOpen: boolean;
  setIsSignInModalOpen: Dispatch<SetStateAction<boolean>>; // 상태 관리 Type
  handleSignUp: () => void;
}

export interface SignUpModalType {
  isSignUpModalOpen: boolean;
  setIsSignUpModalOpen: Dispatch<SetStateAction<boolean>>; // 상태 관리 Type
}
