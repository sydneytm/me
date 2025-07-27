import * as React from "react";
import "./css/App.css";
import Navigation from "./components/Navigation";
import { Home } from "./screens/Home.jsx";
import { DogTown } from "./screens/dogTown.jsx";
import { Math } from "./screens/Math/Math.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <div style={{ marginTop: "18px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me/dogtown" element={<DogTown />} />
          <Route path="/me/math/d4" element={<Math />} />
          <Route path="/me/math" element={<Math />} />
          <Route path="/me/math" element={<Math />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
