import * as React from 'react';
import { useState } from 'react';
import '../../css/Home.css';
import { useSpring, animated } from '@react-spring/web';
export const SquareAnimation = () => {
    // const styles = useSpring({
    //     transform: `rotate(${rotation}deg)`,
    //     config: { tension: 200, friction: 20 },
    //   });

  //   const [props, api] = useSpring(
  //   () => ({
  //     from: { opacity: 0 },
  //     to: { opacity: 1  },
  //   }),
  //   [] 
  // )
    

  const [styles, api] = useSpring(
    () => ({
      from: { opacity: 0, transform: 'rotate(0deg)' },
      to: { opacity: 1, transform: 'rotate(360deg)' },
    }),
    [] 
  )
    // const handleClick = () => {
    //     se