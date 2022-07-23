import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import { GenericProviderProps, Todo } from '../types'
import { useServices } from './ServicesProvider'

type TodoContextType = {
  todos: Todo[]
}
const TodoContext = createContext<TodoContextType | null>(null)

const todos = (function () {
  const { data } = useServices()

  return data.retrieve()
})()

const TodoProvider = ({ children }: GenericProviderProps) => {
  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useTodo = () => {
  const todoContext = useContext(TodoContext)

  if (!todoContext) {
    throw new Error(
      'todoContext was called without being nested in TodoProvider'
    )
  }

  return todoContext
}

export default TodoProvider
