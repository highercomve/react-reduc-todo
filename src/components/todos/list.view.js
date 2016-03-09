import React from 'react'
import { filterTodos } from '../filter_visibility/store'

const Todo = ({
  onClick,
  completed,
  text
}) => {
  return (
    <li onClick={onClick}
      className={(completed) ? 'ready':'not-ready'}>
      { text }
    </li>
  )
}

const TodoList = ({ todos, visibilityFilter, toggleHandler }) => {
  const visibleTodos = filterTodos(todos, visibilityFilter)
  return (
    <ul>
      { visibleTodos.map((todo, index) => {
        return <Todo key={todo.id}
          {...todo}
          onClick={() => toggleHandler(todo.id)} />
        })
      }
    </ul>
  )
}

export default TodoList
