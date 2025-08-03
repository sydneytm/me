import * as React from "react";
import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import styles from "../../cssModules/navigation.module.css";
import { motion, useAnimation } from "framer-motion";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "../../model/theme/theme";

export function AnimatedButton(props) {
  const [isHover, setHover] = useState(false);
  const controls = useAnimation();
  const handleHover = async () => {
    setHover(true);
    await controls.start({ rotate: -10, transition: { duration: 0.2 } });
    await controls.start({ rotate: 10, transition: { duration: 0.2 } });
    await controls.start({ rotate: 0, transition: { duration: 0.2 } });
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
      animate={controls}
      ref={props.ref}
    >
      <ThemeProvider theme={theme}>
        <Typography style={{ color: isHover ? "hotpink" : "black" }}>
          {props.text}{" "}
        </Typography>
      </ThemeProvider>
    </motion.div>
  );
}
