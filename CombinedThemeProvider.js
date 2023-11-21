import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider as ReactThemeProvider } from "react-jss";

const CombinedThemeProvider = ({ children }) => {
  return (
    <NextThemeProvider>
      <ReactThemeProvider>{children}</ReactThemeProvider>
    </NextThemeProvider>
  );
};

export default CombinedThemeProvider;
