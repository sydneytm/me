import * as React from 'react';
import '../../css/Math.css';
import { SquareAnimation } from '../../screens/Math/SquareAnimation.jsx';

export const Math = () => {
    return (
        <>
        <h1>
          Compute operations of the Dihedral Group of Order 8
        </h1>
        <p>The Dihedral group of order 8 is a useful group in abstract algebra describing the symmetries of a square, with each of its elements representing a different transformation of the square. Each element is a different "operation", which you can compose together to create new operations. </p>
    
        <SquareAnimation />
        </>
    );

}