import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Background, Container } from './Home.style'
import { repoActions } from '../../actions'
import Search from '../../components/Search/Search'
import RepoList from '../../components/RepoList/RepoList'
import Pagination from '../../components/Pagination'
import EmptyState from '../../components/EmptyState'
import RequestDuration from '../../components/RequestDuration'

const Home = () => {
  const [query, setQuery] = useState('')
  const [didFetch, setDidFetch] = useState(false)
  const repos = useSelector(state => state.repos.data)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = useCallback(
    event => {
      const { value } = event.target

      setQuery(value)
    },
    [setQuery]
  )

  const handleClick = useCallback((repo, name, owner) => {
    dispatch(
      repoActions.getOwnerData(
        repo,
        history.push,
        `repos/${owner.login}/${name}/details`
      )
    )
  }, [])

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        dispatch(repoActions.getRepos(query))
        setDidFetch(true)
      }
    }, 500)

    return () => clearTimeout(handler)
  }, [query])

  return (
    <Container repos={repos}>
      <Background />
      <Search handleChange={handleChange} />
      <RequestDuration />
      {repos && repos.length > 0 ? (
        <RepoList data={repos} handleClick={handleClick} />
      ) : (
        <EmptyState didFetch={didFetch} />
      )}
      <Pagination />
    </Container>
  )
}

export default Home
