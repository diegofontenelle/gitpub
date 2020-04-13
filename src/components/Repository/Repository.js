import React from 'react'
import { func, string } from 'prop-types'
import { Container, Footer, Title } from './Repository.style'

const Repository = ({ handleClick, name, owner }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Footer>
        <p>{owner}</p>
        <button type="button" onClick={handleClick}>
          Details
        </button>
      </Footer>
    </Container>
  )
}

Repository.propTypes = {
  handleClick: func.isRequired,
  name: string.isRequired,
  owner: string.isRequired,
}

export default Repository
