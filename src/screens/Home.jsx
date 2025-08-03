import * as React from "react";
import { useState } from "react";
import { Skills } from "../components/Skills";
import { AnimatedText } from "../components/AnimatedText";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import theme from "../model/theme/theme.jsx";
import { useSpring, animated, config } from "@react-spring/web";
import { Math } from "./Math/Math";
export const Home = () => {
  // const [{ background }] = useSpring(
  //   () => ({
  //     from: { theme: "var(--step0)" },
  //     to: [
  //       { background: "var(--step0)" },
  //       { background: "var(--step1)" },
  //       { background: "var(--step2)" },
  //       { background: "var(--step3)" },
  //       { background: "var(--step4)" },
  //     ],
  //     config: config.molasses,
  //     loop: {
  //       reverse: true,
  //     },
  //   }),
  //   []
  // );

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2" color="black" style={{ marginTop: "90px" }}>
        About me
      </Typography>
      <Typography color="black">
        Hi! I'm Sydney, a Mathematics and Computer Science student at
        Northwestern University
      </Typography>
      <div style={{ marginBottom: "120px" }}>
        <Skills />
      </div>
      <Math />
    </ThemeProvider>
  );
};
