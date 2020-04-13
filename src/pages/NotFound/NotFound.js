import React from 'react'
import { Container, Message, Title } from './NotFound.style'
import { Background, Computer } from '../../shared/animations'
import BackButton from '../../components/BackButton'

const NotFound = () => {
  return (
    <Container>
      <Title>404.</Title>
      <Message>We could not find what you are looking for</Message>
      <Background />
      <Computer />
      <BackButton />
    </Container>
  )
}

export default NotFound
