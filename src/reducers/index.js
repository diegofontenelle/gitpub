import { combineReducers } from 'redux'
import loading from './loading'
import pagination from './pagination'
import repos from './repos'

export default combineReducers({
  loading,
  pagination,
  repos,
})
