import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

// import styles from './styles.module.css'
import "../css/App.css"
const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

export const AnimatedText = () => {
  const [open, toggle] = useState(false)
  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      reverse: open,
      from: { factor: 10, opacity: 0, scale: 0.9, freq: '0.0175, 0.0' },
      to: { factor: 150, opacity: 1, scale: 1, freq: '0.0, 0.0' },
      config: { duration: 3000 },
    }),
    [open]
  )

  return (
    <div onClick={() => toggle(!open)}>
      <animated.svg  style={{ scale, opacity }} viewBox="0 0 1278 446">
        <title>Animated Text</title>
        <defs>
          <filter id="water">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="2" result="TURB" seed="8" />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
        <text x="100" y="200" fontSize="80" fill="#52796f" className='lexend-deca-thick'>
   Sydney TerMolen
  </text>
        </g>
      </animated.svg>
    </div>
  )
}
