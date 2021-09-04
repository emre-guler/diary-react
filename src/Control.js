import React, { useState } from "react";

const darkModeContext = React.createContext(false);

const Control = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <darkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </darkModeContext.Provider>
  );
};

export default Control;
