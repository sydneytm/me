import { AnimatedButton } from "./AnimatedButton";
import { Stack, ThemeProvider, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import theme from "../../model/theme/theme";
import { Link, Element } from "react-scroll";
export function SpecialNavBar() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(false);
  const { scrollYProgress } = useScroll();
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 1],
    [`0 2px 4px rgba(0, 0, 0, 0)`, `0 2px 4px rgba(0, 0, 0, 0.8)`]
  );

  return (
    <motion.div
      display="flex"
      alignItems="flex-start"
      style={{
        width: "100%",
        alignItems: "flex-start",
        display: "flex",
        position: "fixed",
        top: "10px",
        zIndex: 1000,
        alignContent: "center",
        justifyContent: "space-between",
        boxShadow,
        height: "40px",
        alignText: "center",
        marginBottom: "400px",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          style={{
            marginLeft: "30px",
            zIndex: 1002,
            color: "black",
            marginTop: "10px",
          }}
        >
          Sydney TerMolen
        </Typography>
        <Stack
          spacing={3}
          direction={"row"}
          style={{ marginRight: "50px", marginTop: "10px" }}
        >
          <Link to="home" smooth={true} duration={500}>
            <AnimatedButton
              func={() => {
                navigate("/");
              }}
              text="Home"
            />
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <AnimatedButton
              func={() => {
                // navigate("/me/d4");
              }}
              text="Skills"
            />
          </Link>
          {/* <Link to="math" smooth={true} duration={500}>
            <AnimatedButton
              func={() => {
                // navigate("/me/d4");
              }}
              text="D4"
            />
          </Link> */}
          <Link to="contact" smooth={true} duration={500}>
            <AnimatedButton
              func={() => {
                // navigate("/me/d4");
              }}
              text="Contact"
            />
          </Link>
        </Stack>
      </ThemeProvider>
    </motion.div>
  );
}
