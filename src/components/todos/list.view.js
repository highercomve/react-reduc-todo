import React from 'react'
import { filterTodos } from '../filter_visibility/reducer'

const Todo = ({ toggleHandler, removeHandler, completed, text, id }) => {
  return (
    <li className={(completed) ? 'ready':'not-ready'}>
      <span className="content"
        onClick={ () => { toggleHandler(id) }}>
        { text }
      </span>
      <button className="todo-remove"
        onClick={ () => { removeHandler(id) }} >
        &otimes;
      </button>
    </li>
  )
}

const TodoList = ({ todos, visibilityFilter, toggleHandler, removeHandler }) => {
  const visibleTodos = filterTodos(todos, visibilityFilter)
  return (
    <ul>
      { visibleTodos.map((todo, index) => {
        return <Todo key={index}
          {...todo}
          toggleHandler={ toggleHandler } 
          removeHandler={ removeHandler } />
        })
      }
    </ul>
  )
}

export default TodoList
