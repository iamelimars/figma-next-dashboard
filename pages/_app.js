import App from "next/app";
import React from "react";

import { GlobalStyles } from "../styles/global";
import { ThemeContextProvider } from "../context/themeContext";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeContextProvider>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </ThemeContextProvider>
  );
};

export default MyApp;
