import { createContext, useCallback, useMemo, useState } from "react";
const themes = {
  light: {
    id: "light",
    font: "black",
    background: "white",
    buttonBackground: "white",
  },
  dark: {
    id: "dark",
    font: "white",
    background: "black",
    buttonBackground: "blue",
  },
};

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const handleThemeChange = useCallback(() => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  }, [theme]);

  const contextData = useMemo(
    () => ({ theme, handleThemeChange }),
    [theme, handleThemeChange]
  );

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
