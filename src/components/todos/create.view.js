import React from 'react'

const TodoForm = ({ createHandler }) => {
  var _ = {}
  return (
    <form className="todo-form"
      onSubmit={(e) => {
        e.preventDefault()
        if(_.input.value !== "") {
          createHandler(_.input.value)
        }
        _.input.value = ''
      }} >
      <input type="text"
      ref={node => {
        _.input = node
      }} />
      <button type="submit">
        Add Todo
      </button>
  </form>
  )
}

export default TodoForm
