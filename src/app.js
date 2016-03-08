import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import TodoList from './components/todos/list.view'
import TodoForm from './components/todos/create.view'

console.log(store)

const TodoApp = () => {
  return (
    <div>
      <TodoForm createHandler={(text) => {
          store.dispatch({ type: "ADD_TODO", text: text })
        }}/>
      <TodoList
        todos={store.getState().todos}
        toggleHandler={(index) => {
          store.dispatch({ type: "TOGGLE_TODO", index: index})
        }} />
    </div>
  )
}

const render = () => {
  ReactDOM.render(<TodoApp/>,document.getElementById('root'))
}

render()

store.subscribe(render)
