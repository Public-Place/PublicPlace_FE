import { Dispatch, SetStateAction } from "react";

export interface SignInModalType {
  isSignInModalOpen: boolean;
  setIsSignInModalOpen: Dispatch<SetStateAction<boolean>>; // 상태 관리 Type
  handleSignUp: () => void;
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
}

export interface SignUpModalType {
  isSignUpModalOpen: boolean;
  setIsSignUpModalOpen: Dispatch<SetStateAction<boolean>>; // 상태 관리 Type
}

export interface CheckDuplicationType {
  value: string;
}

export interface useSignInModalEventType {
  isSignInModalOpen: boolean;
  setIsSignInModalOpen: Dispatch<SetStateAction<boolean>>; // 상태 관리 Type
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
}
