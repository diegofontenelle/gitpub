import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Background,
  BackgroundLeft,
  Container,
  Divider,
  Navigation,
} from './RepoDetails.style'
import Owner from './Owner'
import Repo from './Repo'
import BackButton from '../../components/BackButton'
import RequestDuration from '../../components/RequestDuration'

const RepoDetails = () => {
  const history = useHistory()
  const { current: repository } = useSelector(state => state.repos)

  if (!repository) history.push('/')

  if (!repository) return null

  return (
    <Container>
      <Background />
      <BackgroundLeft />

      <Navigation align="center">
        <BackButton />
        <RequestDuration />
      </Navigation>

      <Repo data={repository} />

      <Divider />

      <Owner data={repository.owner} />
    </Container>
  )
}

export default RepoDetails
