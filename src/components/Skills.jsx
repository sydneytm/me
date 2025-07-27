import ReactLogo from "../assets/react.svg";
import JavaLogo from "../assets/java.svg.png";
import Postgre from "../assets/Postgresql_elephant.svg.png";
import PythonLogo from "../assets/Python-Emblem.png";
import RacketLogo from "../assets/racket.svg";
import SpringBootLogo from "../assets/spring-boot.png";
import SvelteLogo from "../assets/svelte.png";
import CLogo from "../assets/C_Programming_Language.svg";
import CPlusPlusLogo from "../assets/c++.svg.png";
import { Grid, Chip, Typography, Divider } from "@mui/material";
import "../css/Home.css";
import React from "react";

const Skill = ({ src }) => {
  return (
    <Grid item>
      <img src={src} className="img" />
    </Grid>
  );
};

export const Skills = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="flex-start">
        <Skill src={ReactLogo} />
        <Skill src={SvelteLogo} />
        <Skill src={Postgre} />
        <Skill src={SpringBootLogo} />
        <Divider textAlign="left">content </Divider>
        <Grid item size={12}>
          <Typography>Languages:</Typography>
        </Grid>
        <Skill src={JavaLogo} />
        <Skill src={CLogo} />
        <Skill src={CPlusPlusLogo} />
        <Skill src={PythonLogo} />
        <Skill src={RacketLogo} />
      </Grid>
    </>
  );
};
