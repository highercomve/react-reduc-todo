import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { filters } from './components/filter_visibility/store'
import TodoList from './components/todos/list.view'
import TodoForm from './components/todos/create.view'
import FilterMenu from './components/filter_visibility/filter.view'

const TodoApp = () => {
  return (
    <div>
      <TodoForm createHandler={(text) => {
          store.dispatch({ type: "ADD_TODO", text: text })
        }}/>
      <TodoList
        {...store.getState()}
        toggleHandler={(index) => {
          store.dispatch({ type: "TOGGLE_TODO", index: index})
        }}
        removeHandler={(index) => {
          store.dispatch({ type: "REMOVE_TODO", index: index})
        }}/>
      <FilterMenu filters={filters}
        visibilityFilter={store.getState().visibilityFilter}
        handleFilter={(filter) => {
          store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: filter })
        }}/>
    </div>
  )
}

const render = () => {
  ReactDOM.render(<TodoApp/>,document.getElementById('root'))
}

render()

store.subscribe(render)
