import * as React from "react";
import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import styles from "../cssModules/gradient.module.css";
import { motion } from "framer-motion";
// import {Dr}
import { AnimatedButton } from "./animatedButton";
export const GradientHome = () => {
  const [isHover, setHover] = useState(false);
  const [{ background }] = useSpring(
    () => ({
      from: { background: "var(--step0)" },
      to: [
        { background: "var(--step0)" },
        { background: "var(--step1)" },
        { background: "var(--step2)" },
        { background: "var(--step3)" },
        { background: "var(--step4)" },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  const [{ textColor }] = useSpring(
    () => ({
      from: { color: "var(--step0)" },
      to: [
        { color: "var(--step0)" },
        { color: "var(--step1)" },
        { color: "var(--step2)" },
        { color: "var(--step3)" },
        { color: "var(--step4)" },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  return (
    <animated.div className={styles.background} style={{ background }}>
      <animated.h1 style={{ textColor }}>textColor</animated.h1>
      <animated.div className={styles.block} style={{ background }} />

      {/* <p>hi</p>
      <h1 style={{ color: "black" }}>
        asdfkafasdfffffffffffasdjfiajsdklfjlksjlkjslkdjfsjdfl
      </h1>
      <h1>asdfkasjdfl</h1>
      <h1>asdfkasjdfl</h1>
      <p>lajsdlf</p> */}
      {/* <div className={styles.squares}>
        <div className={styles.block} />
        <div className={styles.block} />
        <animated.div className={styles.block} style={{ background }} />
      </div>
      <animated.div className={styles.background} style={{ background }} /> */}
      {/* <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
        }}
        animate={{ scale: isHover ? 0.8 : 1, rotate: isHover ? 90 : 0 }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      /> */}
      <AnimatedButton
        func={() => {
          console.log("hi");
        }}
        text="Click Me"
      />
    </animated.div>
  );
};
