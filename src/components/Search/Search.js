import React from 'react'
import { func } from 'prop-types'
import { SearchInput, SearchIcon, SearchContainer } from './Search.style'

const Search = ({ handleChange }) => (
  <>
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        data-testid="search-input"
        onChange={handleChange}
        type="text"
        placeholder="Start typing a repository name"
      />
    </SearchContainer>
  </>
)

Search.propTypes = {
  handleChange: func.isRequired,
}

export default Search
