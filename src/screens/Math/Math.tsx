import * as React from "react";
import "../../css/Math.css";
import { SquareAnimation } from "../../screens/Math/SquareAnimation.jsx";
import { Typography } from "@mui/material";
import { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
export const Math = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // const tran .slateX = useTransform(s)

  // const [activePage, setActivePage] = useState(false);
  // const { scrollYProgress } = useScroll();
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.8],
    [`translateX(-900px)`, `translateX(0px)`]
  );

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 300);

  // function useParallax(value: MotionValue<number>, distance: number) {
  //   return useTransform(value, [0, 1], [-distance, distance]);
  // }
  return (
    <section id="math">
      <motion.div style={{ transform: translateX }}>
        <Typography
          variant="h2"
          color="black"
          style={{
            textAlign: "left",
            marginBottom: "20px",
            // transform: transform,
          }}
        >
          Math
        </Typography>

        <Typography variant="h2" color="black" style={{ textAlign: "center" }}>
          Compute operations of the Dihedral Group of Order 8
        </Typography>
        <Typography color="black" style={{ marginBottom: "50px" }}>
          The Dihedral group of order 8 (D4) is a useful group in abstract
          algebra describing the symmetries of a square, with each of its
          elements representing a different transformation of the square. Each
          element is a different "operation", which you can compose together to
          create new operations. D4 is also non-abelian (non-commutative). You
          can see that 90 * vertical gives you a different result than vertical
          * 90.{" "}
        </Typography>
        <SquareAnimation />
      </motion.div>
    </section>
  );
};
