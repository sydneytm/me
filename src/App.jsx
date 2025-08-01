import * as React from "react";
import { useAnimation } from "framer-motion";
import { useState } from "react";
// import "./css/App.css";
import Navigation from "./components/Navigation";
import { Home } from "./screens/Home.jsx";
import { DogTown } from "./screens/DogTown.jsx";
import { Math } from "./screens/Math/Math.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { D3 } from "./screens/Math/D3.jsx";
import { ParallaxScreen } from "./screens/ParallexScreen.jsx";
import { GradientHome } from "./otherScreens/gradientHome.jsx";
import { DraggableList } from "./otherScreens/draggableList.jsx";
import { SpecialNavBar } from "./components/SpecialNavBar";
import { AnimatedButton } from "./otherScreens/animatedButton.jsx";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./cssModules/gradient.module.css";
function App() {
  const comp = motion.create(AnimatedButton);
  const [isHover, setHover] = useState(false);
  const controls = useAnimation();
  const handleHover = async () => {
    await controls.start({ rotate: -20, transition: { duration: 0.2 } });
    await controls.start({ rotate: 20, transition: { duration: 0.2 } });
    await controls.start({ rotate: 0, transition: { duration: 0.2 } });
  };
  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      {/* <Navigation></Navigation> */}

      <Router>
        <SpecialNavBar />
        <div style={{ marginTop: "18px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/me/dogtown" element={<DogTown />} />
            <Route path="/me/math/d4" element={<Math />} />
            <Route path="/me/math/d3" element={<D3 />} />
            <Route path="/me/parallax" element={<ParallaxScreen />} />
          </Routes>
        </div>
      </Router>

      {/* <AnimatedButton
        func={() => {
          window.location.href = "/";
        }}
        text="Home"
      /> */}
    </div>
  );
}

export default App;
