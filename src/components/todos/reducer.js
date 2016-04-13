function defaultTodoObj () {
  return { completed: false }
}

function addTodo (state, action) {
  return [
    ...state,
    newTodo({ id: state.length,  text: action.text })
  ]
}

function newTodo (todo) {
  return {
    ...defaultTodoObj(),
    ...todo
  }
}

function removeTodo (state, id) {
  return state.filter(todo => todo.id !== id )
}

function toggleTodo (state, id) {
  const index = state.findIndex(todo => todo.id === id )
  return [
    ...state.slice(0, index),
    changeStatus(state[index]),
    ...state.slice(index + 1)
  ]
}

function changeStatus (todo) {
  return {
    ...todo,
    completed: !todo.completed
  }
}

function saveToLocalStorage (state) {
  window.localStorage.setItem('todos', JSON.stringify(state))
  return state
}

function readLocalStorage () {
  return JSON.parse(window.localStorage.getItem('todos') || '[]')
}

function todos (state = readLocalStorage(), action) {
  switch (action.type) {
    case "ADD_TODO":
      return saveToLocalStorage(addTodo(state, action))
    case "REMOVE_TODO":
      return saveToLocalStorage(removeTodo(state, action.index))
    case "TOGGLE_TODO":
      return saveToLocalStorage(toggleTodo(state, action.index))
    default:
      return state
  }
}

export default todos
