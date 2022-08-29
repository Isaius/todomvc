import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { GenericProviderProps } from './GenericProviderProps'
import { useServices } from './ServicesProvider'
import { Todo } from '../../domain/Todo'

type TodoContextType = {
  todos: Todo[],
  setTodos: (todos: Todo[]) => void
}

const TodoContext = createContext<TodoContextType | null>(null)

const TodoProvider = ({ children }: GenericProviderProps) => {
  const { data } = useServices()
  const [todos, setTodosValue] = useState<Todo[]>([])

  useEffect(() => {
    data.retrieve().then((todos) => { setTodosValue(todos)})
  }, [data]);

  const setTodos = (newTodos: Todo[]) => {
    setTodosValue(newTodos);
    data.store(newTodos);
  }

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
