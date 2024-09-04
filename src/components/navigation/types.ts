import { Dispatch, SetStateAction } from "react";

export interface NavagationType {
  toggleNav: () => void;
  isClosing: boolean;
}

export interface NavigationEventType {
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
}
