"use client";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#df005b",
    },
  },
  typography: {
    h1: {
      color: "rgba(255, 255, 255, .88)",
    },
    h2: {
      color: "rgba(255, 255, 255, .88)",
    },
    h5: {
      color: "rgba(255, 255, 255, .88)",
    },
    subtitle1: {
      color: "rgba(255, 255, 255, .88)",
    },
    subtitle2: {
      color: "rgba(255,255,255,.72)",
    },
    body1: {
      color: "rgba(255, 255, 255, .88)",
    },
    body2: {
      color: "rgba(255, 255, 255, .88)",
    },
    caption: {
      color: "rgba(255,255,255,.72)",
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        style: {
          backgroundColor: "#151515",
        },
      },
    },
  },
});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
