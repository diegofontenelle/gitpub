import React from 'react'
import { bool } from 'prop-types'
import { Container, Message } from './EmptyState.style'
import { Background, Computer } from '../../shared/animations'

const EmptyState = ({ didFetch }) => {
  const mainMessage = didFetch
    ? 'Roses are red, violets are blue'
    : 'Wow such empty'
  const message = didFetch
    ? 'We did not find anything for you'
    : 'Start typing and let us do the rest'

  return (
    <Container>
      <Background />
      <Computer />
      <Message>{mainMessage}</Message>
      <Message>{message}</Message>
    </Container>
  )
}

EmptyState.propTypes = {
  didFetch: bool.isRequired,
}

export default EmptyState
