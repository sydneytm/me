import { useState } from "react";

export interface UseMath {
    // square: number[];
    horizontal: (square: number[]) => number[];
    vertical: (square: number[]) => number[];
    diagonal: (square: number[]) => number[];
    antiDiagonal: (square: number[]) => number[];
    ninety: (square: number[]) => number[];
    one80: (square: number[]) => number[];
    two70: (square: number[]) => number[];
    squaresMatch: (square1: number[], square2: number[]) => boolean;
    

}

export const UseMath = () => {
    const [square, setSquare] = useState<number[]>([1, 2, 3, 4]);
    const [ogSquare, setOgSquare] = useState<number[]>([1, 2, 3, 4]);
    const horizontal = (square: number[]) => {
        return [square[1], square[0], square[3], square[2]]
    }
    const vertical = (square: number[]) => {
        return [square[3], square[2], square[1], square[0]]
    }
    const diagonal = (square: number[]) => {
        return [square[0], square[3], square[2], square[1]]
    }
    const antiDiagonal = (square: number[]) => {
        return [square[2], square[1], square[0], square[3]]
    }
    const ninety = (square: number[]) => {
        return [square[3], square[0], square[1], square[2]]
        // setSquare([square[3], square[0], square[1], square[2]])
    }
    const one80 = (square: number[]) => {
        return ninety(ninety(square));
    }
    const two70 = (square: number[]) => {
        return one80(ninety(square));
    }

    // const horizontal = (square: number[]) => {
    //     setSquare([square[1], square[0], square[3], square[2]])
    // }
    // const vertical = (square: number[]) => {
    //     setSquare([square[3], square[2], square[1], square[0]])
    // }
    // const diagonal = (square: number[]) => {
    //     setSquare([square[0], square[3], square[2], square[1]])
    // }
    // const antiDiagonal = (square: number[]) => {
    //     setSquare([square[2], square[1], square[0], square[3]])
    // }
    // const ninety = (square: number[]) => {
    //     setSquare([square[3], square[0], square[1], square[2]])
    //     // setSquare([square[3], square[0], square[1], square[2]])
    // }
    // const one80 = (square: number[]) => {
    //     setSquare([square[2], square[3], square[0], square[1]]);
    // }
    // const two70 = (square: number[]) => {
    //     setSquare([square[1], square[2], square[3], square[0]]);
    // }

    const squaresMatch = (square1: number[], square2: number[]) => {
        return square1.every((value, index) => value === square2[index]);
    }

    const onSave = (square: number[]) => {
        setSquare(square);
    }



    return {
        horizontal,
        vertical,
        diagonal,
        antiDiagonal,
        ninety,
        one80,
        two70,
        squaresMatch

    };

}


