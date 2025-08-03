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

export default theme;
