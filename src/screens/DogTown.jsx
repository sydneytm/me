

import React, { useState } from 'react';
import Cooper from '../assets/cooper.png';
import Finn from '../assets/finn.png';
import SuperFinn from '../assets/superFinn.png';
import { DogGrid } from '../DogGrid.jsx';
import '../css/dogTown.css'
export  const DogTown = () => {
  const [isSpinning, setSpinning] = useState(false);
  const [superDog, setSuperDog] = useState(false);

  return (
    <>
      <div>
        <a target="_blank" onClick={() => setSpinning((isSpinning) => !isSpinning)}>
          {isSpinning && <img src={Cooper} className="nonSpinLogo react" alt="Finn" />}
          {!isSpinning && <img src={Cooper} className="logo react" alt="Cooper" />}
        </a>
        <a target="_blank">
            
          <img src={Finn} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setSuperDog(!superDog)}>
          Super Dog
        </button>
      </div>
      
      {superDog && <img src={SuperFinn} className="super-dog" alt="React logo"/>}
      {!superDog && <p className="filler" alt="React logo" />}


      <DogGrid />
    </>
  );
};