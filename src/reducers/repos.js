import TYPES from '../actions/types'

const INITIAL_STATE = {
  data: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.REPOS.GET:
      return { ...state, data: action.payload }
    case TYPES.REPOS.CURRENT.SET:
      return { ...state, current: action.payload }
    default:
      return state
  }
}
