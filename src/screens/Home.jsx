import * as React from 'react';
import { useState } from 'react';
import '../css/Home.css';
import { Skills } from '../components/Skills';
export const Home = () => {

return( 
    <>
      <h1 style={{ textAlign: 'left', marginTop: '20px' }}>  
        Sydney TerMolen
    </h1>

    <h2>Technology and tools I use: </h2>
    <Skills/>

    </> )
}
