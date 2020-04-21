import React, { Component } from 'react'
import {
  element, func, node, oneOfType,
} from 'prop-types'
import {
  Container, ErrorMessage, Message, Title,
} from './ErrorBoundary.style'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state
    const { children } = this.props
    if (errorInfo) {
      return (
        <Container>
          <Title>Oops, something went wrong.</Title>
          <Message>
            This is probably a problem in our end, sorry about that :(
          </Message>
          <ErrorMessage>{error && error.toString()}</ErrorMessage>
        </Container>
      )
    }

    return children
  }
}

ErrorBoundary.propTypes = {
  children: oneOfType([element, node, func]).isRequired,
}
