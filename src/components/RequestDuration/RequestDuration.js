import React from 'react'
import { useSelector } from 'react-redux'
import { RequestTime } from './RequestDuration.style'

const RequestDuration = () => {
  const { duration } = useSelector(state => state.loading)

  if (!duration) return null

  return (
    <RequestTime data-testid="request-time">
      {`Fetched in ${duration}s`}
    </RequestTime>
  )
}

export default RequestDuration
