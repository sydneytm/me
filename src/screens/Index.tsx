import * as React from "react";

import { Math } from "./Math/Math";
import "../css/Home.css";
import { Home } from "./Home";
import { Skills } from "../components/Skills";
import { Element } from "react-scroll";
import { ParallaxScreen } from "./ParallaxScreen";
export const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Element name="home">
        <div style={{ marginTop: "50px" }} />
        <p>dfskljf</p>
        <Home />
      </Element>
      <Element name="skills">
        <div style={{ marginTop: "50px" }} />
        <p>dfskljf</p>
        <Skills />
      </Element>

      <Element name="math">
        <div style={{ marginTop: "50px" }} />
        <p>dfskljf</p>
        <Math />
      </Element>

      <ParallaxScreen />
    </div>
  );
};
