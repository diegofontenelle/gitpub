import React, { useCallback } from 'react'
import { string } from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Container, Footer, Title } from './Repository.style'

const Repository = ({ name, owner }) => {
  const history = useHistory()

  const handleClick = useCallback(() => {
    history.push(`repos/details`)
  }, [history, name, owner])

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
  name: string.isRequired,
  owner: string.isRequired,
}

export default Repository
