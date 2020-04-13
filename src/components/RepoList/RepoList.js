import React from 'react'
import { func } from 'prop-types'
import { useSelector } from 'react-redux'
import { Container, Col } from './RepoList.style'
import Repository from '../Repository'

const RepoList = ({ handleClick }) => {
  const repos = useSelector(state => state.repos.data)

  return (
    <Container>
      {repos.map(repo => {
        const { id, name, owner } = repo
        return (
          <Col key={id}>
            <Repository
              handleClick={() => handleClick(repo, name, owner)}
              id={id}
              name={name}
              owner={owner.login}
            />
          </Col>
        )
      })}
    </Container>
  )
}

RepoList.propTypes = {
  handleClick: func.isRequired,
}

export default RepoList
