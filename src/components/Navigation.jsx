import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Navigation.css";
import { useState } from "react";
import theme from "../model/theme/theme";
const Navigation = () => {
  const navigate = useNavigate();
  const [mathOpen, setMathOpen] = useState(false); // toggle state
  const handleMathClick = () => {
    setMathOpen(!mathOpen);
  };
  return (
    <div
      className="top-nav"
      style={{ backgroundColor: theme.palette.secondary.light }}
    >
      <ul>
        <li
          style={{ color: theme.palette.secondary.dark }}
          onClick={() => navigate("")}
        >
          Home
        </li>
        <li
          style={{ color: theme.palette.secondary.dark }}
          onClick={() => navigate("me/dogtown")}
        >
          Dog Town
        </li>
        {/* <li onClick={() => navigate('/services')}>Services</li> */}
        {/* <li onClick={() => navigate('/me/math')}>Math</li> */}

        <li
          style={{ color: theme.palette.secondary.dark }}
          className="dropdown"
          onClick={handleMathClick}
        >
          Math {mathOpen ? "▼" : "▶"}
        </li>
        {mathOpen && (
          <ul className="sub-menu">
            <li
              style={{ color: theme.palette.secondary.dark }}
              onClick={() => navigate("/me/math/d4")}
            >
              D4
            </li>
            <li
              style={{ color: theme.palette.secondary.dark }}
              onClick={() => navigate("/me/math")}
            >
              Geometry
            </li>
            <li
              style={{ color: theme.palette.secondary.dark }}
              onClick={() => navigate("/me/math")}
            >
              Calculus
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
