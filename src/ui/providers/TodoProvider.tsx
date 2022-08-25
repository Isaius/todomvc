import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { GenericProviderProps } from './GenericProviderProps'
import { useServices } from './ServicesProvider'
import { Todo } from '../../domain/Todo'

type TodoContextType = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoContext = createContext<TodoContextType | null>(null)

const TodoProvider = ({ children }: GenericProviderProps) => {
  const { data } = useServices()
  const [todos, setTodos] = useState<Todo[]>([])
  
  useEffect(() => {
    data.retrieve().then((todos) => { setTodos(todos)})
  }, [data])

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useTodosContext = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error(
      'todoContext was called without being nested in TodoProvider'
    )
  }

  return todoContext;
}

export default TodoProvider;
