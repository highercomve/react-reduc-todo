import { combineReducers, createStore } from 'redux'
import todos from './components/todos/store'

const reducer = combineReducers({
  todos
})
const store = createStore(reducer)

export default store
