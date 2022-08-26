import { useEffect } from 'react';
import { Todo, addTodo, toggleTodo } from '../../domain/Todo';
import { useServices } from '../providers/ServicesProvider';
import { useTodosContext } from '../providers/TodoProvider';

const useTodo = () => {
  const { todos, setTodos } = useTodosContext();
  const { data } = useServices();

  useEffect(() => {
    const persistTodos = (todos: Todo[]) => {
      if (todos.length !== 0) {
        data.store(todos).then((todos) => {
          return todos;
        });
      }
    };

    return persistTodos(todos);
  }, [todos, data]);

  const handleTodoAddition = (todoTitle: string) => {
    setTodos(addTodo(todos, todoTitle));
  };

  const addMultipleTodos = (todos: Todo[]) => {
    setTodos(todos);
  };

  const toggleTodoStatus = (todoTimestamp: number) => {
    setTodos(toggleTodo(todos, todoTimestamp));
  };

  const handleTodoStatusToggle = (todo: Todo) => {
    toggleTodoStatus(todo.timestamp);
  };

  return {
    todos,
    handleTodoAddition,
    handleTodoStatusToggle,
    addMultipleTodos,
  };
};

export default useTodo;
