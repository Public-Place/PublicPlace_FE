import { Dispatch, SetStateAction } from "react";
import { SortedTeamListType } from "../../dtos/team/TeamListType";

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
  teamId?: number;
}

export interface useSignInModalEventType {
  isSignInModalOpen: boolean;
  setIsSignInModalOpen: Dispatch<SetStateAction<boolean>>; // 상태 관리 Type
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
}

export interface KebabModalType {
  postId: number;
  isTeamPost: boolean;
}

export interface BoardRulesType {
  isBoardRulesOpen: boolean;
  setIsBoardRulesOpen: Dispatch<SetStateAction<boolean>>;
}

export interface JoinListModalType {
  isJoinListModalOpen: boolean;
  setIsJoinListModalOpen: Dispatch<SetStateAction<boolean>>;
  teamId: number;
}

export interface TeamCardModalType {
  isTeamCardOpen: boolean;
  setIsTeamCardOpen: Dispatch<SetStateAction<boolean>>;
  team: SortedTeamListType;
}
