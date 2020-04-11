import TYPES from './types'

const hideSnackbar = () => ({ type: TYPES.SNACKBAR.HIDE })

const showSnackbar = (variant, message) => ({
  type: TYPES.SNACKBAR.SHOW,
  payload: { message, variant },
})

export { hideSnackbar, showSnackbar }
