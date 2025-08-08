import * as React from "react";
import { SquareAnimation } from "../../screens/Math/SquareAnimation.jsx";
import { Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
export const Math = () => {
  const { scrollYProgress } = useScroll();

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.8],
    [`translateX(-900px)`, `translateX(0px)`]
  );

  return (
    <section id="math">
      <motion.div style={{ transform: translateX }}>
        <Typography
          variant="h2"
          color="black"
          style={{
            textAlign: "left",
            marginBottom: "20px",
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
