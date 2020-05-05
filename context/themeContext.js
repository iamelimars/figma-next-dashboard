import React, { createContext, useState, useContext } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext({ theme: "light" });

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [depositModalOpen, setDepositModalOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const openDepositModal = () => {
    setDepositModalOpen(true);
  };

  const closeDepositModal = () => {
    setDepositModalOpen(false);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        depositModalOpen,
        closeDepositModal,
        openDepositModal,
      }}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

//Custom hook
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};
