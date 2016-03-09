import React from 'react'
import { filterTodos } from '../filter_visibility/store'

const Todo = ({
  onClick,
  onRemove,
  completed,
  text
}) => {
  return (
    <li className={(completed) ? 'ready':'not-ready'}>
      <span className="content"
        onClick={onClick}>{ text }</span>
      <button className="todo-remove"
        onClick={onRemove}> &otimes; </button>
    </li>
  )
}

const TodoList = ({
  todos,
  visibilityFilter,
  toggleHandler,
  removeHandler
}) => {
  const visibleTodos = filterTodos(todos, visibilityFilter)
  return (
    <ul>
      { visibleTodos.map((todo, index) => {
        return <Todo key={index}
          {...todo}
          onClick={() => toggleHandler(index) }
          onRemove={() => removeHandler(index) }/>
        })
      }
    </ul>
  )
}

export default TodoList
