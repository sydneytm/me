import * as React from "react";
import { useState, useEffect } from "react";
import { Skills } from "../components/Skills";
import { AnimatedText } from "../components/AnimatedText";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import theme from "../model/theme/theme.jsx";
import { useSpring, animated, config } from "@react-spring/web";
import { Math } from "./Math/Math";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
// import Scrollspy from "react-scrollspy";
import { Home } from "./Home";
// import Scrollspy from "react-scrollspy";
import { Link, Element } from "react-scroll";
const sections = ["home", "math"];
import { DogTown } from "./DogTown";
export const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Element name="home">
        <Home />
      </Element>
      <Element name="math">
        <Math />
      </Element>
      <Element name="dogtown">
        <DogTown />
      </Element>
    </div>
  );
};
