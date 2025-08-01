import { AnimatedButton } from "../otherScreens/animatedButton";
import { Stack } from "@mui/material";
import { GradientHome } from "../otherScreens/gradientHome";
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import theme from "../model/theme/theme";
import { Typography } from "@mui/material";

export function SpecialNavBar() {
  const navigate = useNavigate();
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
        justifyContent: "center",
      }}
    >
      <Stack spacing={2} direction={"row"}>
        <AnimatedButton
          func={() => {
            navigate("/");
          }}
          text="About Me"
          style={{ marginRight: "10px" }}
        />
        <AnimatedButton
          func={() => {
            console.log("hi");
          }}
          text="Skills"
        />
        <AnimatedButton
          func={() => {
            navigate("/me/math");
          }}
          text="Math"
        />
        <AnimatedButton
          func={() => {
            navigate("me/dogtown");
          }}
          text="Dog Town"
        />
      </Stack>
    </motion.div>
  );
}
