import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#dd2d4a",
      light: "#f26a8d",
      dark: "#880d1e",
      contrastText: "#000000",
    },
    secondary: {
      main: "#a2d2ff",
      light: "#cbeef3",
      dark: "#001233",
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
