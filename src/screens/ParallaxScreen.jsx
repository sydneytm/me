import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Header } from "../components/Header";
// import styles from "../css/parallexStyles.module.css";
import { D3 } from "./Math/D3";
import styles from "../css/parallexStyles.module.css";
// import "./styles.css";
import { useRef } from "react";
import Typescript from "../assets/Typescript.svg.png";
import Sql from "../assets/Sql_data_base_with_logo.png";
import Javascript from "../assets/javascript.png";
import Css from "../assets/css.png";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const ParallaxScreen = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // const y = useParallax(scrollYProgress, 300);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        style={{
          // marginBottom: y,
          color: "black",
          scaleX,
        }}
      >
        Hey there
      </motion.div>
    </>
  );
};
