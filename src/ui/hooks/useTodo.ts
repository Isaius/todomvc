import { Todo, addTodo, toggleTodo } from '../../domain/Todo';
import { useTodosContext } from '../providers/TodoProvider';

const useTodo = () => {
  const { todos, setTodos } = useTodosContext();

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
