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
      url,
    })
  })

  return pages
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
    dispatch({
      type: TYPES.SNACKBAR.SHOW,
      payload: { message: 'Something went wrong', variant: 'error' },
    })
    dispatch({ type: TYPES.LOADING.HIDE, payload: error.duration })
  }
}

const getReposByPage = url => async dispatch => {
  try {
    dispatch({ type: TYPES.LOADING.SHOW })

    const endpoint = url.split('.com')[1]

    const response = await api.get(endpoint)
    const links = parse(response.headers.link)
    const pages = mountPaginationObject(links)

    dispatch({ type: TYPES.REPOS.GET, payload: response.data.items })
    dispatch({ type: TYPES.PAGINATION.SET, payload: pages })
    dispatch({ type: TYPES.LOADING.HIDE, payload: response.duration })
  } catch (error) {
    dispatch({ type: TYPES.ERROR })
    dispatch({ type: TYPES.LOADING.HIDE, payload: error.duration })
  }
}

export { getRepos, getReposByPage }
