import * as React from "react";
import { useState } from "react";
import { Skills } from "../components/Skills";
import { AnimatedText } from "../components/AnimatedText";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import theme from "../model/theme/theme.jsx";
import { useSpring, animated, config } from "@react-spring/web";
import { Math } from "./Math/Math";
import "../css/Home.css";

export const Home = () => {
  return (
    <section id="home">
      <Typography
        variant="h2"
        color="black"
        style={{
          marginTop: "90px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        About me
      </Typography>
      <Typography variant="h3" color="black" style={{ marginTop: "90px" }}>
        Hi!
      </Typography>
      <Typography color="black">
        I study mathematics and computer science at Northwestern University.
      </Typography>
      <div style={{ marginBottom: "120px", justifyContent: "center" }}>
        <Skills />
      </div>
      {/* <Math /> */}
    </section>
  );
};
