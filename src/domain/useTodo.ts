import { useState } from 'react';

import { Todo, addTodo } from './Todo';

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (todo: Todo) => {
    setTodos(addTodo(todos, todo));
  };

  const handleTodoAddition = (todoTitle: string) => {
    addNewTodo({
      title: todoTitle,
      isCompleted: false,
      creationDate: new Date().toUTCString(),
    });
  };

  return {
    todos,
    handleTodoAddition,
  };
};

export default useTodo;
