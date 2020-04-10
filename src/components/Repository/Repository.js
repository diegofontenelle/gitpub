import React from 'react'
import { number, string } from 'prop-types'
import {
  Container, Footer, Title,
} from './Repository.style'

const Repository = ({ id, name, owner }) => (
  <Container>
    <Title>{name}</Title>
    <Footer>
      <p>{owner}</p>
      <button type="button" onClick={() => id}>Details</button>
    </Footer>
  </Container>
)

Repository.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  owner: string.isRequired,
}

export default Repository
