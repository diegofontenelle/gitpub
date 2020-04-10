import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Col } from './RepoList.style'
import Repository from '../Repository'

const RepoList = () => {
  const repos = useSelector(state => state.repos.data)

  return (
    <Container>
      {repos.map(({
        id, name, owner,
      }) => (
        <Col key={id}>
          <Repository id={id} name={name} owner={owner.login} />
        </Col>
      ))}
    </Container>
  )
}

export default RepoList
