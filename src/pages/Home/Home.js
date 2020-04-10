import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

  const handleChange = useCallback(
    event => {
      const { value } = event.target

      setQuery(value)
    },
    [setQuery],
  )

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
      {repos && repos.length > 0 ? <RepoList data={repos} />
        : <EmptyState didFetch={didFetch} />}
      <Pagination />
    </Container>
  )
}

export default Home
