import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { BackButton } from './BackButton.style'

const Back = () => {
  const history = useHistory()

  const handleClick = useCallback(() => {
    history.goBack()
  }, [])

  return <BackButton onClick={handleClick}>Back</BackButton>
}

export default Back
