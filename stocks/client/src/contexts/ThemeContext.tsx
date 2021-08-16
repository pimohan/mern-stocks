import { createContext, useState, useEffect } from "react";
import { LIGHT_THEME } from "../constants/ThemeConstants";

export const ThemeContext = createContext({
  theme: LIGHT_THEME,
  setTheme: (value: any) => {},
});

/**
 * Store current theme and switching theme entire app
 * @param param0 children
 * @returns ThemeContextProvider
 */
export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = theme;

    head.appendChild(link);

    return () => {
      head.removeChild(link);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
