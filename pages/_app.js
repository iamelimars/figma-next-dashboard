import App from "next/app";
import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { ThemeContext } from "../context/themeContext";

const globalTheme = {
  switchWidth: "40px",
  switchHeight: "20px",
  switchPadding: "3px",
  colorContrastLow: "#d3d3d4",
  colorWhite: "#FFF",
  switchColorPrimary: "#302C40",
  switchAnimationDuration: "0.2s",
  gradient:
    "linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)",
  colorGreen: "#5DC399",
  colorGray: "#adadad",
};

export const lightTheme = {
  primary: "#FFF",
  secondary: "#F8F8F8",
  textColor: "#585280",
  header: "#585280",
  headerNumber: "#FFF",
  activeMenu: "#585280",
  ...globalTheme,
};

export const darkTheme = {
  primary: "#302C40",
  secondary: "#2C2839",
  textColor: "#FFF",
  header: "#FFF",
  headerNumber: "#585280",
  activeMenu: "#FFF",
  ...globalTheme,
};

// export default class MyApp extends App {
//   render() {
//     const context = useContext(ThemeContext);
//     const { theme } = context;
//     const { Component, pageProps } = this.props;
//     return (
//       <ThemeProvider theme={lightTheme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     );
//   }
// }

const MyApp = (props) => {
  const context = useContext(ThemeContext);
  const { theme } = context;
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
};

export default MyApp;
