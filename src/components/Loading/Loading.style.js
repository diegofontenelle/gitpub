import { Coffee } from '@styled-icons/boxicons-regular/Coffee'
import styled, { keyframes } from 'styled-components'

const grow = keyframes`
  from {
    max-height: 0;
  } 
  to {
    max-height: 40px;
  }
`

const DrinkContainer = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  margin-left: -15px;
  margin-top: 17px;
  position: relative;
  width: 40px;
`

const DrinkContent = styled.span`
  animation: ${grow} 4s ease-in-out infinite;
  animation-delay: 0s;
  animation-play-state: running;
  background-color: #824242;
  bottom: 0;
  display: flex;
  height: 40px;
  left: 0%;
  position: absolute;
  width: 40px;
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.1);
`

const LoadingIcon = styled(Coffee)`
  color: #fff;
  height: 90px;
  width: 90px;
  position: absolute;
  z-index: 2;
`

const LoadingMessage = styled.p`
  color: #fff;
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
  position: absolute;
  bottom: -${props => props.theme.spacing(4)};
  width: 140px;
`

export {
  DrinkContent,
  DrinkContainer,
  LoadingContainer,
  LoadingIcon,
  LoadingMessage,
}
