import * as React from "react";
import "../../css/Math.css";
import { SquareAnimation } from "../../screens/Math/SquareAnimation.jsx";
import { Typography } from "@mui/material";
export const Math = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Compute operations of the Dihedral Group of Order 8
      </h2>
      <p style={{ marginBottom: "50px", color: "#588157" }}>
        The Dihedral group of order 8 (D4) is a useful group in abstract algebra
        describing the symmetries of a square, with each of its elements
        representing a different transformation of the square. Each element is a
        different "operation", which you can compose together to create new
        operations. D4 is also non-abelian (non-commutative). You can see that
        90 * vertical gives you a different result than vertical * 90.{" "}
      </p>

      <SquareAnimation />

      <Typography
        variant="h4"
        component="h2"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        Subgroups
      </Typography>
      <ul>
        <li></li>
      </ul>
    </>
  );
};
