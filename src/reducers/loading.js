import TYPES from '../actions/types'

const INITIAL_STATE = {
  isLoading: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOADING.SHOW:
      return { ...state, isLoading: true }
    case TYPES.LOADING.HIDE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
