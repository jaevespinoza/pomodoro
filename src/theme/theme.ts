import { createTheme } from "@mui/material/styles";

/**
 * We add more variables to the Theme interface to help us with the
 * definition of theme variables. For example, we define the workTimer, shortBreak,
 * and longBreak objects that will hold the color associated to it and its button.
 */
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

/**
 * Theme of the application. We define the various colors that we will use
 * across the app, centralizing the information for easier access.
 * This means that, if we want to change the color, all we need to do
 * is change the color in this file and it will spread to all the parts
 * of the application that use it.
 */
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
