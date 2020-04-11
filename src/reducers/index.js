import { combineReducers } from 'redux'
import loading from './loading'
import pagination from './pagination'
import repos from './repos'
import snackbar from './snackbar'

export default combineReducers({
  loading,
  pagination,
  repos,
  snackbar,
})
