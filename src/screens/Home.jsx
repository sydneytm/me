import * as React from "react";
import { useState } from "react";
// import "../css/Home.css";
import { Skills } from "../components/Skills";
import { AnimatedText } from "../components/AnimatedText";
// import { ThemeProvider } from "@emotion/react";
// import createTheme from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import theme from "../model/theme/theme.jsx";
import { Typography } from "@mui/material";
import { useSpring, animated, config } from "@react-spring/web";
import styles from "../css/styles.module.css";

const myTheme = createTheme({
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

const myTheme2 = createTheme({
  palette: {
    primary: {
      main: "#cdb4db",
      light: "#560bad",
      dark: "#3f37c9",
      contrastText: "#000000",
    },
    secondary: {
      main: "#80ffdb",
      light: "#780000",
      dark: "#ffb703",
    },
    background: {
      default: "#001d3d",
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

export const Home = () => {
  // const { theme } = useSpring(
  //   () => ({
  //     from: { theme: myTheme },
  //     to: [
  //       { theme: myTheme },
  //       { theme: myTheme2 },
  //       { theme: myTheme },
  //       { theme: myTheme2 },
  //       { theme: myTheme },
  //     ],
  //     config: config.molasses,
  //     loop: {
  //       reverse: true,
  //     },
  //   }),
  //   []
  // );

  const [{ background }] = useSpring(
    () => ({
      from: { theme: "var(--step0)" },
      to: [
        { background: "var(--step0)" },
        { background: "var(--step1)" },
        { background: "var(--step2)" },
        { background: "var(--step3)" },
        { background: "var(--step4)" },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  return (
    <ThemeProvider theme={theme} style={background}>
      <AnimatedText />
      <Typography color="secondary.dark">
        I'm Sydney, a Mathematics and Computer Science student at Northwestern
        University
      </Typography>
      {/* <animated.div style={{ background }}>heyhey</animated.div> */}
      {/* <h2>Technology and tools I use: </h2> */}
      <Skills />

      <svg width={200} height={200}>
        <polygon points="50,150 150,150 100,50" fill="#3b82f6" />
      </svg>

      {/* <div className={styles.container}> */}
      <div className={styles.squares}>
        <div className={styles.block} />
        <div className={styles.block} />
        <animated.div className={styles.block} style={{ background }} />
      </div>
      <animated.div className={styles.background} style={{ background }} />
      {/* </div> */}
    </ThemeProvider>
  );
};
