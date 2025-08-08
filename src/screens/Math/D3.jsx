import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
import { UseMath } from "./UseMath.js";
import { Grid, Button, Typography, Stack } from "@mui/material";
import theme from "../../model/theme/theme.jsx";
import { ThemeProvider } from "@mui/material/styles";
export const D3 = () => {
  const {
    triangle,
    one20,
    two40,
    flippedHorizontal,
    flippedVertical,
    rotation,
    triDiagonal,
    onReset,
    vertical,
    whatTriangle,
    triAntiDiagonal,
  } = UseMath();
  const { transform } = useSpring({
    transform: `perspective(200px) scaleX(${
      flippedVertical ? -1 : 1
    }) rotateY(${flippedHorizontal ? 180 : 0}deg) rotateZ(${rotation}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h2"
        color="primary.main"
        style={{ textAlign: "center" }}
      >
        Compute operations of the Dihedral Group of Order 6
      </Typography>
      <Typography color="primary.main" style={{ marginBottom: "50px" }}>
        The Dihedral group of order 6 (D3) is a useful group in abstract algebra
        describing the symmetries of a triangle, with each of its elements
        representing a different transformation of the square. Each element is a
        different "operation", which you can compose together to create new
        operations. D3 is also non-abelian (non-commutative) and the smallest
        non-abelian group in group theory.{" "}
      </Typography>

      <Grid
        container
        columns={12}
        spacing={10}
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
        <Grid
          item
          size={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", width: 200, height: 200 }}>
            <animated.svg
              style={{
                width: 200,
                height: 200,
                transformOrigin: "100px 100px",
                transform,
              }}
            >
              <svg width={200} height={200}>
                <polygon
                  points="100, 42.3 50,128.8 150, 128.8"
                  fill={theme.palette.primary.dark}
                />
              </svg>
            </animated.svg>

            <Typography
              style={{
                position: "absolute",
                top: 20,
                left: 96,
                color: "black",
              }}
            >
              {triangle[0]}
            </Typography>
            <Typography
              style={{
                position: "absolute",
                top: 128.8,
                left: 150,
                color: "black",
              }}
            >
              {triangle[1]}
            </Typography>
            <Typography
              style={{
                position: "absolute",
                top: 128.8,
                left: 37,
                color: "black",
              }}
            >
              {triangle[2]}
            </Typography>
          </div>
        </Grid>
        <Grid item size={7}>
          <Typography
            variant="h3"
            color="primary.dark"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            {whatTriangle(triangle)}
          </Typography>
        </Grid>

        <Grid item>
          <Stack direction={"row"} spacing={3} style={{ marginTop: "40px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                // console.log(transform);
                one20();
              }}
              className="btn"
            >
              120
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                // console.log(transform);
                two40();
              }}
              className="btn"
            >
              240
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                vertical();
              }}
              className="btn"
            >
              Vertical
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                triDiagonal();
              }}
              className="btn"
            >
              Diagonal
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                triAntiDiagonal();
              }}
              className="btn"
            >
              Anti-Diagonal
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                onReset();
              }}
              className="btn"
            >
              Reset
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
