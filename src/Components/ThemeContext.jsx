import { createContext, useCallback, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const toggleTheme = useCallback(() => {
    setDark((prev) => !prev);
  }, []);

  const themes = useMemo(() => {
    return {
      background: dark ? "#111827" : "#F3F4F6",
      color: dark ? "#F9FAFB" : "#111827",
      cardBackground: dark ? "#1F2937" : "#FFFFFF",
      buttonBackground: dark ? "#3B82F6" : "#2563EB",
    };
  }, [dark]);

  const value = useMemo(() => {
    return { dark, themes, toggleTheme };
  }, [dark, themes, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}