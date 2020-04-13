import React from 'react'
import styled, { keyframes } from 'styled-components'
import Bg from '../img/space-background.svg'
import Pc from '../img/computer.svg'

const levitate = keyframes`
  from {
    transform translateX(-6px) translateY(-3px) translateZ(0)
  }
  to {
    transform translateX(6px) translateY(3px) translateZ(0)
  }
`

const Background = styled(props => <Bg {...props} />)`
  width: 300px;
  height: 300px;
`

const Computer = styled(props => <Pc {...props} />)`
  animation: ${levitate} 8s ease-in-out infinite alternate;
  animation-duration: 8s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: none;
  animation-play-state: running;
  height: 120px;
  margin-left: -25px;
  margin-top: -35px;
  position: absolute;
  width: 120px;
`

export { Background, Computer }
