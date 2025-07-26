import { useState } from "react";

export const UseMath = () => {
  const [square, setSquare] = useState<number[]>([1, 2, 3, 4]);
  const [flippedVertical, setFlippedVertical] = useState(false);
  const [flippedHorizontal, setFlippedHorizontal] = useState(false);
  const [rotation, setRotation] = useState(0);

  const horizontal = () => {
    setSquare([square[1], square[0], square[3], square[2]]);
    setFlippedHorizontal(!flippedHorizontal);
  };
  const vertical = () => {
    setSquare([square[3], square[2], square[1], square[0]]);
    setFlippedVertical(!flippedVertical);
  };
  const diagonal = () => {
    setSquare([square[2], square[1], square[0], square[3]]);
    setFlippedHorizontal(!flippedHorizontal);
    setRotation(rotation + 90);
  };
  const ninety = () => {
    setSquare([square[3], square[0], square[1], square[2]]);
    setRotation(rotation + 90);
  };
  const one80 = () => {
    setSquare([square[2], square[3], square[0], square[1]]);
    setRotation(rotation + 180);
  };
  const two70 = () => {
    setSquare([square[1], square[2], square[3], square[0]]);
    setRotation(rotation + 270);
  };
  const antiDiagonal = () => {
    setSquare([square[0], square[3], square[2], square[1]]);
    setFlippedVertical(!flippedVertical);
    setRotation(rotation + 90);
  };

  const whatSquare = (square: number[]) => {
    if (square[0] == 1) {
      if (square[1] == 2) {
        if (square[2] == 3) {
          return "0";
        }
      }
      if (square[1] == 4) {
        return "Anti-diagonal";
      }
    } else if (square[0] == 2) {
      if (square[1] == 1) {
        return "Horizontal";
      } else if (square[1] == 3) {
        return "270";
      }
    } else if (square[0] == 3) {
      if (square[1] == 4) {
        return "180";
      } else if (square[1] == 2) {
        return "Diagonal";
      }
    } else if (square[0] == 4) {
      if (square[1] == 3) {
        return "Vertical";
      } else if (square[1] == 1) {
        return "90";
      }
    } else {
      return "";
    }
  };

  const squaresMatch = (square1: number[], square2: number[]) => {
    return square1.every((value, index) => value === square2[index]);
  };
  const onReset = () => {
    setSquare([1, 2, 3, 4]);
    setRotation(0);
    setFlippedHorizontal(false);
    setFlippedVertical(false);
  };

  return {
    square,
    horizontal,
    vertical,
    diagonal,
    antiDiagonal,
    ninety,
    one80,
    two70,
    squaresMatch,
    flippedVertical,
    flippedHorizontal,
    rotation,
    onReset,
    whatSquare,
  };
};
