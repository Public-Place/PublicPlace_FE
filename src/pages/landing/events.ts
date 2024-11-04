import { useState } from "react";

export const useLandingEvent = () => {
  const [activeSection, setActiveSection] = useState(0);

  return { activeSection, setActiveSection };
};
