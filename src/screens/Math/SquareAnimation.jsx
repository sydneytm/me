import * as React from "react";
import "../../css/Home.css";
import { useSpring, animated } from "@react-spring/web";
import "../../css/squareAnimation.css";
import { UseMath } from "./UseMath";
import { Grid, Button, Typography, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#b0c4b1",
      light: "#fed9b7",
      dark: "#ff4d6d",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ff758f",
    },
    background: {
      default: "#f3f4f6",
      paper: "#ffffff",
    },
  },
});
export const SquareAnimation = () => {
  const {
    square,
    horizontal,
    vertical,
    diagonal,
    antiDiagonal,
    flippedHorizontal,
    flippedVertical,
    ninety,
    one80,
    two70,
    rotation,
    onReset,
    whatSquare,
  } = UseMath();
  const { transform } = useSpring({
    transform: `perspective(200px) rotateX(${
      flippedVertical ? 180 : 0
    }deg) rotateY(${flippedHorizontal ? 180 : 0}deg) rotateZ(${rotation}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <ThemeProvider theme={theme}>
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
          <div style={{ position: "relative", width: 150, height: 150 }}>
            <animated.div
              style={{
                width: 150,
                height: 150,
                background: "#f07167",
                transform,
                transformStyle: "preserve-3d",
                cursor: "pointer",
              }}
            ></animated.div>
            <Typography
              style={{
                position: "absolute",
                top: -10,
                left: -10,
                color: "black",
              }}
            >
              {square[0]}
            </Typography>
            <Typography
              style={{
                position: "absolute",
                top: -10,
                right: -10,
                color: "black",
              }}
            >
              {square[1]}
            </Typography>
            <Typography
              style={{
                position: "absolute",
                bottom: -10,
                right: -10,
                color: "black",
              }}
            >
              {square[2]}
            </Typography>
            <Typography
              style={{
                position: "absolute",
                bottom: -10,
                left: -10,
                color: "black",
              }}
            >
              {square[3]}
            </Typography>
          </div>
        </Grid>
        <Grid item size={7}>
          <Typography
            variant="h3"
            color="primary.dark"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            {whatSquare(square)}
          </Typography>
        </Grid>

        <Grid item size={12}>
          <Stack direction={"row"} spacing={3} style={{ marginTop: "40px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => horizontal()}
              className="btn"
            >
              Horizontal
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
                ninety();
              }}
              className="btn"
            >
              90
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                one80();
              }}
              className="btn"
            >
              180
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                two70();
              }}
              className="btn"
            >
              270
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                diagonal();
              }}
              className="btn"
            >
              Diagonal
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                antiDiagonal();
              }}
              className="btn"
            >
              AntiDiagonal
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
