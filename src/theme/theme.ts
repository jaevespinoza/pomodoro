import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    workTimer: {
      color: string;
      button: string;
    };
    shortBreak: {
      color: string;
      button: string;
    };
    longBreak: {
      color: string;
      button: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    workTimer?: {
      color?: string;
      button?: string;
    };
    shortBreak?: {
      color?: string;
      button?: string;
    };
    longBreak?: {
      color?: string;
      button?: string;
    };
  }
}

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  longBreak: {
    color: "#F7DC6F",
    button: "#6C5CE7",
  },
  shortBreak: {
    color: "#FF6B6B",
    button: "#1ABC9C",
  },
  workTimer: {
    color: "#FF7675",
    button: "#00B894",
  },
});
