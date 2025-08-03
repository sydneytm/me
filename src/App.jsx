import * as React from "react";
import { useAnimation } from "framer-motion";
import { useState } from "react";
import Navigation from "./components/Navigation";
import { Home } from "./screens/Home.jsx";
import { DogTown } from "./screens/DogTown.jsx";
import { Math } from "./screens/Math/Math.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { D3 } from "./screens/Math/D3.jsx";
import { ParallaxScreen } from "./screens/ParallexScreen.jsx";
import { GradientHome } from "./otherScreens/gradientHome.jsx";
import { DraggableList } from "./otherScreens/draggableList.jsx";
import { SpecialNavBar } from "./components/Navigation/SpecialNavBar";
import { AnimatedButton } from "./components/Navigation/AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./cssModules/gradient.module.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./model/theme/theme";
import { Index } from "./screens/Index";
function App() {
  return (
    <ThemeProvider
      theme={theme}
      style={{ alignContent: "center", justifyContent: "center" }}
    >
      <Router>
        <SpecialNavBar />
        <div
          style={{
            marginTop: "18px",
            paddingLeft: "200px",
            paddingRight: "200px",
            // justifyContent: "center",
            // display: "flex",
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/me/dogtown" element={<DogTown />} />
            <Route path="/me/d4" element={<Math />} />
            <Route path="/me/d3" element={<D3 />} /> */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
