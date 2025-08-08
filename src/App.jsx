import * as React from "react";
import { useState } from "react";
import Navigation from "./components/Navigation";
import { Home } from "./screens/Home.jsx";
import { DogTown } from "./screens/DogTown.jsx";
import { Math } from "./screens/Math/Math.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { D3 } from "./screens/Math/D3.jsx";
import { SpecialNavBar } from "./components/Navigation/SpecialNavBar";
import { AnimatedButton } from "./components/Navigation/AnimatedButton";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
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
            marginTop: "50px",
            paddingLeft: "200px",
            paddingRight: "200px",
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
