import styled from 'styled-components'

const Background = styled.div`
  background: linear-gradient(135deg,#330867,#31a7bb);
  position: fixed;
  top: -10vh;
  left: 0;
  width: 100%;
  height: calc(100% + 10vh);
  transform: skewY(-5deg);
  box-shadow: 0 0 50px rgba(60,117,162,.4);
  z-index: -1;
`

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 7.5%;
  max-width: 800px;
  width: 100%;
`


export {
  Background,
  Container,
}
