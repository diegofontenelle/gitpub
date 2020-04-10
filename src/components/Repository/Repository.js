import React from 'react'
import { string } from 'prop-types'
import {
  Container, Footer, Title,
} from './Repository.style'

const Card = ({ id, name, owner }) => (
  <Container>
    <Title>{name}</Title>
    <Footer>
      <p>{owner}</p>
      <button type="button" onClick={() => id}>Details</button>
    </Footer>
  </Container>
)

Card.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  owner: string.isRequired,
}

export default Card
