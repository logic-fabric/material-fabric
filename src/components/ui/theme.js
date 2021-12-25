import { createTheme } from "@material-ui/core";

const primary300 = "#67d5ed";
const primary500 = "#278ca2"; // logo color
const primary700 = "#0c5363";

const tonic300 = "#feb364";
const tonic500 = "#fd9222"; // logo color
const tonic700 = "#ab5801";

const success300 = "#67d783";
const success500 = "#458e57";
const success700 = "#0b491a";

const warning300 = "#f6e274";
const warning500 = "#d5b613";
const warning700 = "#806e08";

const danger300 = "#f79689";
const danger500 = "#e64b38";
const danger700 = "#871608";

const neutral100 = "#f2efef";
const neutral300 = "#d3d2d2";
const neutral500 = "#969595";
const neutral700 = "#4b4a4a";
const neutral900 = "#2a2929";

export const theme = createTheme({
  palette: {
    primary: {
      light: `${primary300}`,
      main: `${primary500}`,
      dark: `${primary700}`,
    },
    secondary: {
      light: `${tonic300}`,
      main: `${tonic500}`,
      dark: `${tonic700}`,
    },
    error: {
      light: `${danger300}`,
      main: `${danger500}`,
      dark: `${danger700}`,
    },
    warning: {
      light: `${warning300}`,
      main: `${warning500}`,
      dark: `${warning700}`,
    },
    info: {
      light: `${primary300}`,
      main: `${primary500}`,
      dark: `${primary700}`,
    },
    success: {
      light: `${success300}`,
      main: `${success500}`,
      dark: `${success700}`,
    },
    grey: {
      100: `${neutral100}`,
      300: `${neutral300}`,
      500: `${neutral500}`,
      700: `${neutral700}`,
      900: `${neutral900}`,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "'Lato', helvetica, sans-serif",
    fontSize: 16,

    h1: {
      fontFamily: "'Montserrat', arial, sans-serif",
      fontWeight: 500,
      fontSize: "2.5rem",
    },
    h2: {
      fontFamily: "'Montserrat', arial, sans-serif",
      fontWeight: 500,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.6rem",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.35rem",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.2rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.1rem",
    },
    tab: {
      fontSize: "1.2rem",
    },
  },
});
