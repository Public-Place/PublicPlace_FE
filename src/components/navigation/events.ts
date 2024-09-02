import { useState } from "react";

export const useNavigationEvent = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleSignIn = () => {
    setIsSignInModalOpen(true);
  };

  const handleSignUp = () => {
    setIsSignUpModalOpen(true);
  };

  return {
    isSignInModalOpen,
    setIsSignInModalOpen,
    handleSignIn,
    isSignUpModalOpen,
    setIsSignUpModalOpen,
    handleSignUp,
  };
};
