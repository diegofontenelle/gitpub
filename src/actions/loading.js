import TYPES from './types'

const showLoading = () => ({
  type: TYPES.LOADING.SHOW,
})

const hideLoading = () => ({ type: TYPES.LOADING.HIDE })

export { hideLoading, showLoading }
