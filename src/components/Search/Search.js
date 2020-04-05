import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { repoActions } from '../../actions'

const Search = () => {
  const repos = useSelector((state) => state.repos.data)
  const dispatch = useDispatch()

  function getRepo() {
    dispatch(repoActions.getRepos('jackson'))
  }

  return (
    <>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button type="button" onClick={getRepo}>
        Get repo
      </button>
    </>
  )
}

export default Search
