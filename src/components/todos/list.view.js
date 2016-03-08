import React from 'react'

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

const TodoList = ({ todos, toggleHandler }) => {
  console.log(todos)
  return (
    <ul>
      { todos.map((todo, index) => {
        return <Todo key={todo.id}
          {...todo}
          onClick={() => toggleHandler(todo.id)} />
        })
      }
    </ul>
  )
}

export default TodoList
