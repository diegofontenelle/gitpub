import TYPES from '../actions/types'

const INITIAL_STATE = {
  message: 'Something is not quite right',
  open: false,
  variant: 'error',
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.SNACKBAR.SHOW:
      return { ...state, ...payload, open: true }
    case TYPES.SNACKBAR.HIDE:
      return { ...state, open: false }
    default:
      return state
  }
}
