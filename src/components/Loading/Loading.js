import React from 'react'
import { useSelector } from 'react-redux'
import {
  DrinkContainer,
  DrinkContent,
  LoadingContainer,
  LoadingIcon,
  LoadingMessage,
} from './Loading.style'

const Loading = () => {
  const { isLoading } = useSelector(state => state.loading)

  if (isLoading) {
    return (
      <LoadingContainer data-testid="loading-component">
        <LoadingIcon />
        <DrinkContainer>
          <DrinkContent />
          <LoadingMessage>Refreshing coffee and fetching data</LoadingMessage>
        </DrinkContainer>
      </LoadingContainer>
    )
  }

  return null
}
export default Loading
