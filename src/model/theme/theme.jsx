import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#F8F5E9",
      light: "#FFE3BB",
      dark: "#FFE3BB",
      contrastText: "#000000",
    },
    secondary: {
      main: "#FFF6E9",
      light: "#FFE3BB",
      dark: "#FFE3BB",
    },
    background: {
      default: "#f3f4f6",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Lexend Deca", "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
      color: "#333333",
    },
  },
});

export const theme2 = createTheme({
  palette: {
    primary: {
      main: "#dd2d4a",
      light: "#f26a8d",
      dark: "#880d1e",
      contrastText: "#000000",
    },
    secondary: {
      main: "#90caf9",
      light: "#bbdefb",
      dark: "#64b5f6",
    },
    background: {
      default: "#f3f4f6",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Lexend Deca", "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
      color: "#333333",
    },
  },
});
export default theme;
