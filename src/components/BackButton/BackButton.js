import React from 'react'
import { useHistory } from 'react-router-dom'
import { BackButton } from './BackButton.style'

const Back = () => {
  const history = useHistory()

  return <BackButton onClick={history.goBack}>Back</BackButton>
}

export default Back
