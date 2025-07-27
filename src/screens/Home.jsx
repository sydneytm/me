import * as React from "react";
import { useState } from "react";
import "../css/Home.css";
import { Skills } from "../components/Skills";
import { AnimatedText } from "../components/AnimatedText";
import { ThemeProvider } from "@emotion/react";
import theme from "../model/theme/theme.jsx";
import { Typography } from "@mui/material";
export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <AnimatedText />
      <Typography color="secondary.dark">
        Math and Computer Science student at Northwestern University
      </Typography>
      {/* <h2>Technology and tools I use: </h2> */}
      <Skills />

      <svg width={200} height={200}>
        <polygon points="50,150 150,150 100,50" fill="#3b82f6" />
      </svg>
    </ThemeProvider>
  );
};
