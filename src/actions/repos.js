import parse from 'github-parse-link'
import TYPES from './types'
import api from '../shared/api'

const getPageIndex = link => link.split('page=')[1]

const mountPaginationObject = links => {
  let urls = new Set(Object.values(links))
  urls = [...urls]
  const pages = []

  urls.forEach(url => {
    pages.push({
      index: getPageIndex(url),
      url: url.split('.com')[1],
    })
  })

  return pages
}

const handleError = (dispatch, error, message = 'Something went wrong') => {
  dispatch({
    type: TYPES.SNACKBAR.SHOW,
    payload: { message, variant: 'error' },
  })
  dispatch({ type: TYPES.LOADING.HIDE, payload: error.duration })
}

const getRepos = query => async dispatch => {
  try {
    dispatch({ type: TYPES.LOADING.SHOW })
    const params = {
      q: query,
      sort: 'stars',
      order: 'desc',
    }
    const response = await api.get('/search/repositories', { params })
    const links = parse(response.headers.link)
    const pages = mountPaginationObject(links)
    dispatch({ type: TYPES.REPOS.GET, payload: response.data.items })
    dispatch({ type: TYPES.PAGINATION.SET, payload: pages })
    dispatch({ type: TYPES.LOADING.HIDE, payload: response.duration })
  } catch (error) {
    handleError(dispatch, error)
  }
}

const getOwnerData = (repo, callback, url) => async dispatch => {
  try {
    const { owner } = repo
    const response = await api.get(`/users/${owner.login}`)
    dispatch({
      type: TYPES.REPOS.CURRENT.SET,
      payload: { ...repo, owner: response.data },
    })
    if (typeof callback === 'function') callback(url)
  } catch (error) {
    handleError(dispatch, error)
  }
}

const getReposByPage = url => async dispatch => {
  try {
    dispatch({ type: TYPES.LOADING.SHOW })

    const response = await api.get(url)
    const links = parse(response.headers.link)
    const pages = mountPaginationObject(links)

    dispatch({ type: TYPES.REPOS.GET, payload: response.data.items })
    dispatch({ type: TYPES.PAGINATION.SET, payload: pages })
    dispatch({ type: TYPES.LOADING.HIDE, payload: response.duration })
  } catch (error) {
    handleError(dispatch, error)
  }
}

export { getOwnerData, getRepos, getReposByPage }
