import { combineReducers, createStore } from 'redux'
import todos from './components/todos/store'
import visibilityFilter from './components/filter_visibility/store'

const reducer = combineReducers({
  todos,
  visibilityFilter
})
const store = createStore(reducer)

export default store
