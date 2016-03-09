export default function visibilityFilter (state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter
    default:
      return state
  }
}

export function filterTodos(todos, filter) {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(todo => { return todo.completed })
    case "SHOW_ACTIVE":
      return todos.filter(todo => { return !todo.completed })
    default:
      return todos
  }
}

export const filters = [
  {
    type: "SHOW_ALL",
    text: "All tasks",
  },
  {
    type: "SHOW_ACTIVE",
    text: "Active task"
  },
  {
    type: "SHOW_COMPLETED",
    text: "Completed task"
  }
]
