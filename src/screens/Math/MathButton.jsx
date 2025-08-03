import * as React from "react";
import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import styles from "../../cssModules/gradient.module.css";
import { motion, useAnimation } from "framer-motion";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "../../model/theme/theme";

export function MathButton(props) {
  const [isHover, setHover] = useState(false);
  const controls = useAnimation();
  const handleHover = async () => {
    setHover(true);
    await controls.start({ scale: 2, transition: { duration: 0.2 } });
    await controls.start({ scale: 1, transition: { duration: 0.2 } });
  };
  return (
    <motion.div
      layout
      data-isOpen={isHover}
      className={styles.parent}
      onHoverStart={() => handleHover()}
      onHoverEnd={() => setHover(false)}
      onClick={() => {
        props.func();
      }}
      animate={{
        scale: isHover ? 1.2 : 1,
      }}
      ref={props.ref}
      backgroundColor="pink"
    >
      <ThemeProvider theme={theme}>
        <Typography style={{ color: "black" }}>{props.text} </Typography>
      </ThemeProvider>
    </motion.div>
  );
}
