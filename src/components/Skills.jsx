import ReactLogo from "../assets/react.svg";
import JavaLogo from "../assets/java.svg.png";
import Postgre from "../assets/Postgresql_elephant.svg.png";
import PythonLogo from "../assets/Python-Emblem.png";
import RacketLogo from "../assets/racket.svg";
import SpringBootLogo from "../assets/spring-boot.png";
import SvelteLogo from "../assets/svelte.png";
import CLogo from "../assets/C_Programming_Language.svg";
import CPlusPlusLogo from "../assets/c++.svg.png";
import Typescript from "../assets/Typescript.svg.png";
import Sql from "../assets/Sql_data_base_with_logo.png";
import Javascript from "../assets/javascript.png";
import Css from "../assets/css.png";
import Html from "../assets/html.svg.png";
import { Grid, Chip, Typography, Divider } from "@mui/material";
import "../css/Home.css";
import React from "react";
import { SkillsCard } from "./Skills/SkillsCard";
import Nodejs from "../assets/nodejs.webp";

export const Skills = () => {
  return (
    <div style={{ marginBottom: "120px", justifyContent: "center" }}>
      <Typography variant="h2" marginTop={10} color="black">
        Skills
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item size={12}>
          <Typography>Frontend Development:</Typography>
        </Grid>
        <SkillsCard src={ReactLogo} text="React" />
        <SkillsCard src={SvelteLogo} text="Svelte" />
        <SkillsCard src={Typescript} text="Typescript" />
        <SkillsCard src={Javascript} text="Javascript" />
        <SkillsCard src={Css} text="Css" />
        <SkillsCard src={Html} text="Html" />
        <SkillsCard src={Nodejs} text="Node.js" />
        <Grid item size={12}>
          <Typography>Backend Development:</Typography>
        </Grid>
        <SkillsCard src={CLogo} text="C" />
        <SkillsCard src={CPlusPlusLogo} text="C++" />
        <SkillsCard src={JavaLogo} text="Java" />
        <SkillsCard src={PythonLogo} text="Python" />
        <SkillsCard src={Postgre} text="Postgre" />
        <SkillsCard src={SpringBootLogo} text="Spring Boot" />
      </Grid>
    </div>
  );
};
