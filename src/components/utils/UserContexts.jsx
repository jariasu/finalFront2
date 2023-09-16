import { createContext, useState } from "react";

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  function toggleTheme() {
    document.body.classList.toggle("dark");
  }

  const obj = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ContextGlobal.Provider value={{ obj }}>{children}</ContextGlobal.Provider>
  );
};
