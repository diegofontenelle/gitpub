import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FixedContainer, List, Page, TextButton } from './Pagination.style'
import { repoActions } from '../../actions'

const Pagination = () => {
  const { pages } = useSelector(state => state.pagination)
  const dispatch = useDispatch()

  const handleClick = useCallback(url => {
    dispatch(repoActions.getReposByPage(url))
  }, [dispatch])

  if (pages && pages.length > 0) {
    return (
      <FixedContainer data-testid="pagination">
        <List>
          {pages.map(({ index, url }) => (
            <Page key={url}>
              <TextButton onClick={() => handleClick(url)}>
                {index}
              </TextButton>
            </Page>
          ))}
        </List>
      </FixedContainer>
    )
  }

  return null
}

export default Pagination
