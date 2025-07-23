import { useState } from 'react';
import { UseMath } from './UseMath';
// import { Square } from '../../components/Banner.jsx'
import Square from '../../assets/square.png';
import * as React from 'react';
import '../../css/Math.css';
import  Button from '@mui/material/Button';
import { SquareAnimation } from '../../screens/Math/SquareAnimation.jsx';

export const Math = () => {
    const [square, setSquare] = useState<number[]>([1, 2, 3, 4]);
    const { horizontal, vertical, diagonal, antiDiagonal, ninety, one80, two70, squaresMatch } = UseMath();
    return (
        <>
        <SquareAnimation />

        <Button onClick={() => {     
            setSquare(ninety)
            }} className="btn">
          Ninety
        </Button>
        <Button onClick={() => setSquare(one80(square))} className="btn">
          One Eighty
        </Button>
        <Button onClick={() => setSquare(two70(square))} className="btn">
          Two Seventy
        </Button>

        <button onClick={() => setSquare(horizontal(square))} className="btn">
          Horizontal
        </button>
        <button onClick={() => setSquare(vertical(square))} className="btn">
          Vertical
        </button>
        <button onClick={() => setSquare(diagonal(square))} className="btn">
          Diagonal
        </button>
        <button onClick={() => setSquare(antiDiagonal(square))} className="btn">
          Anti Diagonal
        </button>
        <button onClick={() => setSquare([1, 2, 3, 4])} className="btn">
          Reset
        </button>


        {squaresMatch([1,2,3,4], square) && <img src={Square} className="square" alt="square" />}

        {squaresMatch(horizontal([1,2,3,4]), square) && <img src={Square} className="square" alt="square" />}
        {squaresMatch(vertical([1,2,3,4]), square) && <img src={Square} className="square" alt="square" />}
        {squaresMatch(diagonal([1,2,3,4]), square) && <img src={Square} className="square" alt="square" />}
        {squaresMatch(antiDiagonal([1,2,3,4]), square) && <img src={Square} className="square" alt="square" />} 
            {/* {horizontal(square)==square && <img src={Square} className="square" alt="square" />}
            {vertical(square)==square && <img src={Square} className="square" alt="square" />}
            {diagonal(square)==square && <img src={Square} className="square" alt="square" />}
            {antiDiagonal(square)==square && <img src={Square} className="square" alt="square" />} */}

        {squaresMatch(ninety([1,2,3,4]), square) && <img src={Square} className="square ninety" alt="square" />}
        {squaresMatch(one80([1,2,3,4]), square) && <img src={Square} className="square one80" alt="square" />}
        {squaresMatch(two70([1,2,3,4]), square) && <img src={Square} className="square two70" alt="square" />}

        </>
    );

}