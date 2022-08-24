import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { GenericProviderProps } from '../types'
import { useServices } from './ServicesProvider'
import { Todo } from '../domain/Todo'

type TodoContextType = {
  todos: Todo[]
}

const TodoContext = createContext<TodoContextType | null>(null)

const TodoProvider = ({ children }: GenericProviderProps) => {
  const { data } = useServices()
  const [todos, setTodos] = useState<Todo[]>([])
  
  useEffect(() => {
    data.retrieve().then(setTodos)
  }, [data])

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useTodo = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error(
      'todoContext was called without being nested in TodoProvider'
    )
  }

  return todoContext;
}

export default TodoProvider;
