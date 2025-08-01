import * as React from "react";
import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import styles from "../cssModules/gradient.module.css";
import { motion, useAnimation } from "framer-motion";

export function AnimatedButton(props) {
  const [isHover, setHover] = useState(false);
  const controls = useAnimation();
  const handleHover = async () => {
    setHover(true);
    await controls.start({ rotate: -20, transition: { duration: 0.2 } });
    await controls.start({ rotate: 20, transition: { duration: 0.2 } });
    await controls.start({ rotate: 0, transition: { duration: 0.2 } });
  };
  return (
    // <motion.div
    //   layout
    //   transition={{ duration: 1 }}
    //   // style={{
    //   //   width: 300,
    //   //   height: 150,
    //   //   borderRadius: 30,
    //   //   backgroundColor: "#fff",
    //   // }}
    //   // animate={{ scale: isHover ? 1 : 0.8 }}
    //   className={styles.parent}
    //   onHoverStart={() => setHover(true)}
    //   onHoverEnd={() => setHover(false)}
    //   initial={{ borderRadius: 50 }}
    //   data-isOpen={isHover}
    //   onClick={() => {
    //     props.func();
    //   }}
    // >
    <motion.div
      layout
      data-isOpen={isHover}
      initial={{ borderRadius: 50 }}
      className={styles.parent}
      // onClick={() => setHover(!isHover)}
      // onHoverStart={() => setHover(true)}
      onHoverStart={() => handleHover()}
      onHoverEnd={() => setHover(false)}
      // animate={{ rotate: i/sHover ? 10 : 0 }}
      onClick={() => {
        props.func();
      }}
      animate={controls}
      ref={props.ref}
    >
      <h3 style={{ color: "black" }}>{props.text} </h3>
      {/* <motion.div
        layout
        transition={{ duration: 1 }}
        className={styles.child}
      /> */}
      {/* {text} */}
    </motion.div>
  );
}
