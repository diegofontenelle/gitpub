import TYPES from './types'
import api from '../shared/api'

export const getRepos = (query) => {
  return async (dispatch) => {
    try {
      const params = {
        q: query,
        sort: 'stars',
        order: 'desc',
      }
      const response = await api.get('/search/repositories', { params })
      dispatch({ type: TYPES.REPOS.GET, payload: response.data.items })
    } catch (error) {
      dispatch({ type: TYPES.ERROR })
    }
  }
}
