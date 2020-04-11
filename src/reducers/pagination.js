import TYPES from '../actions/types'

const INITIAL_STATE = {
  pages: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.PAGINATION.SET:
      return { ...state, pages: [...action.payload] }
    default:
      return state
  }
}
