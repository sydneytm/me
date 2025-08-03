import * as React from "react";
import "../../css/Math.css";
import { SquareAnimation } from "../../screens/Math/SquareAnimation.jsx";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../../model/theme/theme.jsx";
export const Math = () => {
  return (
    <section id="math">
      <Typography
        variant="h2"
        color="black"
        style={{ textAlign: "left", marginBottom: "20px" }}
      >
        Math
      </Typography>
      <Typography variant="h2" color="black" style={{ textAlign: "center" }}>
        Compute operations of the Dihedral Group of Order 8
      </Typography>
      <Typography color="black" style={{ marginBottom: "50px" }}>
        The Dihedral group of order 8 (D4) is a useful group in abstract algebra
        describing the symmetries of a square, with each of its elements
        representing a different transformation of the square. Each element is a
        different "operation", which you can compose together to create new
        operations. D4 is also non-abelian (non-commutative). You can see that
        90 * vertical gives you a different result than vertical * 90.{" "}
      </Typography>
      <SquareAnimation />

      {/* <Typography
        variant="h4"
        component="h2"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        Subgroups
      </Typography>
      <Chip label="Horizontal"></Chip> */}
      {/* <ul>
        <li></li>
      </ul> */}
    </section>
  );
};
