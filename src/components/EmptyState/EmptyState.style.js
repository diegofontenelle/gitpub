import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 40%;
  width: 100%;
`

const Message = styled.p`
  color: #dedede;
  font-size: ${props => props.theme.fontSizes.medium};
  text-align: center;
  width: 285px;
`

export { Container, Message }
