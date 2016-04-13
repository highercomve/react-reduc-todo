import { combineReducers, createStore } from 'redux'
import todos from './components/todos/reducer'
import visibilityFilter from './components/filter_visibility/reducer'

const reducer = combineReducers({
  todos,
  visibilityFilter
})
const store = createStore(reducer)

export default store
