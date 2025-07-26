import * as React from 'react';
import { useState } from 'react';
import '../css/Home.css';
import { Skills } from '../components/Skills';
import { AnimatedText } from '../components/AnimatedText';
export const Home = () => {

return( 
    <>
    <AnimatedText/>
    <h3>
      Math and Computer Science student at Northwestern University
    </h3>
    <h2>Technology and tools I use: </h2>
    <Skills/>


    </> )
}

