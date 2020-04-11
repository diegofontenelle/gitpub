import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SnackbarContainer, ErrorIcon, WarningIcon } from './Snackbar.style'
import { snackbarActions } from '../../actions'

const variants = {
  error: 'error',
  warning: 'warning',
}

const Snackbar = () => {
  const { message, open, variant } = useSelector(state => state.snackbar)
  const dispatch = useDispatch()

  useEffect(() => {
    const handler = dispatch(snackbarActions.hideSnackbar)
    if (open) {
      setTimeout(handler, 4000)
    }
    return () => {
      clearTimeout(handler)
    }
  }, [open])

  if (!open) return null

  return (
    <SnackbarContainer variant={variant}>
      {variant === variants.warning ? (
        <WarningIcon data-testid="snackbar-warning-icon" />
      ) : (
        <ErrorIcon data-testid="snackbar-error-icon" />
      )}
      <p>{message}</p>
    </SnackbarContainer>
  )
}

export default Snackbar
