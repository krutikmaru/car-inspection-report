import React, { createContext, useContext, useEffect, useState } from "react";

const ApplicationManagerContext = createContext();

export const useApplicationManager = () => {
  const context = useContext(ApplicationManagerContext);
  if (!context) {
    throw new Error(
      "useApplicationManager must be used within a ApplicationManagerProvider"
    );
  }
  return context;
};

export const ApplicationManagerProvider = ({ children }) => {
  const [fullScreenPopCenter, setFullScreenPopCenter] = useState({
    isActive: false,
    Component: null,
  });

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);
  // When Menu opened in mobile and then if we switch to desktop, then going back to mobile still shows that menu open. RESET MOBILE STATES
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Desktop helper functions
  const activatePopupCenter = (component) => {
    setFullScreenPopCenter({ isActive: true, component });
  };
  const deactivatePopupCenter = () => {
    setFullScreenPopCenter({ isActive: false, component: null });
  };

  const value = {
    fullScreenPopCenter,
    setFullScreenPopCenter,

    isSmallScreen,

    activatePopupCenter,
    deactivatePopupCenter,
  };
  return (
    <ApplicationManagerContext.Provider value={value}>
      {children}
    </ApplicationManagerContext.Provider>
  );
};
