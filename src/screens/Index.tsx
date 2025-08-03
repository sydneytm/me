import * as React from "react";

import { Math } from "./Math/Math";
import "../css/Home.css";
import { Home } from "./Home";
import { Element } from "react-scroll";
import { ParallaxScreen } from "./ParallaxScreen";
export const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Element name="home">
        <Home />
      </Element>
      <Element name="math">
        <Math />
      </Element>
      <ParallaxScreen />
    </div>
  );
};
