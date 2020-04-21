import React from 'react'
import { bool } from 'prop-types'
import { Container, Message } from './EmptyState.style'
import { Background, Computer } from '../../shared/animations'

const EmptyState = ({ didFetch }) => {
  let mainMessage = 'Wow such empty'
  let message = 'Start typing and let us do the rest'

  if (didFetch) {
    mainMessage = 'Roses are red, violets are blue'
    message = 'We did not find anything for you'
  }

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
