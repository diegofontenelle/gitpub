import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Container,
  ErrorIcon,
  SnackbarContainer,
  WarningIcon,
} from './Snackbar.style'
import { snackbarActions } from '../../actions'

const variants = {
  error: 'error',
  warning: 'warning',
}

const Snackbar = () => {
  const { message, open, variant } = useSelector(state => state.snackbar)
  const dispatch = useDispatch()

  useEffect(() => {
    const handler = setTimeout(() => {
      if (open) {
        dispatch(snackbarActions.hideSnackbar())
      }
    }, 4000)

    return () => {
      clearTimeout(handler)
    }
  }, [open])

  if (!open) return null

  return (
    <Container>
      <SnackbarContainer variant={variant}>
        {variant === variants.warning ? (
          <WarningIcon data-testid="snackbar-warning-icon" />
        ) : (
          <ErrorIcon data-testid="snackbar-error-icon" />
        )}
        <span>{message}</span>
      </SnackbarContainer>
    </Container>
  )
}

export default Snackbar
