import parse from 'github-parse-link'
import axios from 'axios'
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
  } catch (error) {
    dispatch({ type: TYPES.ERROR })
  } finally {
    dispatch({ type: TYPES.LOADING.HIDE })
  }
}

const getReposByPage = url => async dispatch => {
  try {
    dispatch({ type: TYPES.LOADING.SHOW })

    const response = await axios.get(url)
    const links = parse(response.headers.link)
    const pages = mountPaginationObject(links)

    dispatch({ type: TYPES.REPOS.GET, payload: response.data.items })
    dispatch({ type: TYPES.PAGINATION.SET, payload: pages })
  } catch (error) {
    dispatch({ type: TYPES.ERROR })
  } finally {
    dispatch({ type: TYPES.LOADING.HIDE })
  }
}

export {
  getRepos,
  getReposByPage,
}
