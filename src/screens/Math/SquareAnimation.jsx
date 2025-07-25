import * as React from 'react';
import { useState } from 'react';
import '../../css/Home.css';
import { useSpring, animated, a } from '@react-spring/web';
import '../../css/squareAnimation.css';
import Square from '../../assets/square.png';
import { UseMath } from './UseMath';
import { Grid, Button, Typography } from '@mui/material';
export const SquareAnimation = () => {

  const { square, horizontal, vertical, diagonal, antiDiagonal, flippedHorizontal, flippedVertical, flippedAntiDiagonal, flippedDiagonal, ninety, one80, two70, rotation, onReset, whatSquare} = UseMath();
  
  
  const { transform } = useSpring({
    transform: `perspective(200px) rotateX(${flippedVertical ? 180 : 0}deg) rotateY(${flippedHorizontal ? 180 : 0}deg) rotateZ(${rotation}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })


return( 
    <>
    <Grid container columns={12} spacing={10} justifyContent="center" alignItems="center" style={{ marginTop: "20px" }}> 
    <Grid item size={5}>
<div style={{ position: "relative", width: 150, height: 150 }}>
<animated.div
        style={{
          width: 150,
          height: 150,
          background: "#60a5fa",
          transform,
          transformStyle: "preserve-3d",
          cursor: "pointer",
        }}
      >
      </animated.div>
      <Typography style={{ position: "absolute", top: -10, left: -10, color: 'black'}}>{square[0]}</Typography>
      <Typography style={{ position: "absolute", top: -10, right: -10, color: 'black' }}>{square[1]}</Typography>
      <Typography style={{ position: "absolute", bottom: -10, right: -10, color: 'black' }}>{square[2]}</Typography>
      <Typography style={{ position: "absolute", bottom: -10, left: -10, color: 'black' }}>{square[3]}</Typography>
    </div> 
    </Grid>
<Grid item size={7}>
  <Typography variant="h3" style={{ marginTop: "20px", color: "black", textAlign: "center" }}>
    {whatSquare(square)}
  </Typography>
</Grid>
  
  <Grid item size={12}>
<div className="flex gap-4" style={{ marginTop: "40px" }}>
    <Button onClick={() => horizontal()} className="btn">
          Horizontal
        </Button>
        <button onClick={() => {
          vertical()
          console.log("flippedVertical", square)
          
          }} className="btn">
          Vertical
        </button>
        <button onClick={() => {
          ninety();
          }} className="btn">
          90
        </button>
        <button onClick={() => {
          one80();
          }} className="btn">
          180
        </button>
        <button onClick={() => {
          two70();
          }} className="btn">
          270
        </button>
        <button onClick={() => {
          diagonal()
          }} className="btn">
          Diagonal
        </button>
        <button onClick={() => {
          antiDiagonal()
          }} className="btn">
          AntiDiagonal
        </button>
        </div>
        </Grid>
        <div className="flex gap-4" style={{ marginTop: "40px" }} >
        <button onClick={() => {
          onReset();
          }} className="btn">
          Reset
        </button>
        </div>

        <div>
          {whatSquare(square)}
        </div>
        </Grid>
    </> )
}
// export default SquareAnimation;

