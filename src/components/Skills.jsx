import ReactLogo from "../assets/react.svg";
import JavaLogo from "../assets/java.svg.png";
import Postgre from "../assets/Postgresql_elephant.svg.png";
import PythonLogo from "../assets/Python-Emblem.png";
import RacketLogo from "../assets/racket.svg";
import SpringBootLogo from "../assets/spring-boot.png";
import SvelteLogo from "../assets/svelte.png";
import CLogo from "../assets/C_Programming_Language.svg";
import CPlusPlusLogo from "../assets/c++.svg.png";
import { Grid, Chip, Typography } from "@mui/material";
import "../css/Home.css";

export const Skills = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <img src={ReactLogo} alt="React" className="img" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={SvelteLogo} alt="React" className="img" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={Postgre} alt="React" className="img" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={SpringBootLogo} alt="React" className="img" />
        </Grid>
        <Grid item size={12}>
          <h2>Languages:</h2>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={JavaLogo} alt="React" className="img" />
        </Grid>
        <Grid item>
          <img src={CLogo} alt="React" className="img" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={CPlusPlusLogo} alt="React" className="img" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={PythonLogo} alt="React" className="img" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={RacketLogo} alt="React" className="img" />
        </Grid>
      </Grid>
    </>
  );
};
