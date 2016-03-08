import React from 'react'

const TodoForm = ({ createHandler }) => {
  var _ = {}
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      createHandler(_.input.value)
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
