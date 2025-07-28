import { useState } from "react";

export const UseMath = () => {
  const [square, setSquare] = useState<number[]>([1, 2, 3, 4]);
  const [flippedVertical, setFlippedVertical] = useState(false);
  const [flippedHorizontal, setFlippedHorizontal] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [triangle, setTriangle] = useState<number[]>([1, 2, 3]);

  const horizontal = () => {
    setSquare([square[1], square[0], square[3], square[2]]);
    setFlippedHorizontal(!flippedHorizontal);
  };
  const vertical = () => {
    setSquare([square[3], square[2], square[1], square[0]]);
    setTriangle([triangle[0], triangle[2], triangle[1]]);
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

  const whatTriangle = (triangle: number[]) => {
    if (triangle[0] == 1) {
      if (triangle[1] == 2) {
        return "0";
      }
      if (triangle[1] == 3) {
        return "Vertical";
      }
    }
    if (triangle[0] == 2) {
      if (triangle[1] == 1) {
        return "Anti-Diagonal";
      }
      if (triangle[1] == 3) {
        return "240";
      }
    }
    if (triangle[0] == 3) {
      if (triangle[1] == 1) {
        return "120";
      }
      if (triangle[1] == 2) {
        return "Diagonal";
      }
    }
  };

  const squaresMatch = (square1: number[], square2: number[]) => {
    return square1.every((value, index) => value === square2[index]);
  };

  const one20 = () => {
    setTriangle([triangle[2], triangle[0], triangle[1]]);
    setRotation(rotation + 120);
  };
  const two40 = () => {
    setTriangle([triangle[1], triangle[2], triangle[0]]);
    setRotation(rotation + 240);
  };
  const triDiagonal = () => {
    setTriangle([triangle[2], triangle[1], triangle[0]]);
    setRotation(rotation + 120);
    setFlippedVertical(!flippedVertical);
  };
  const triAntiDiagonal = () => {
    setTriangle([triangle[1], triangle[0], triangle[2]]);
    setFlippedVertical(!flippedVertical);
    setRotation(rotation + 120);
  };

  const onReset = () => {
    setSquare([1, 2, 3, 4]);
    setRotation(0);
    setFlippedHorizontal(false);
    setFlippedVertical(false);
    setTriangle([1, 2, 3]);
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
    two40,
    one20,
    triangle,
    triDiagonal,
    triAntiDiagonal,
    whatTriangle,
  };
};
