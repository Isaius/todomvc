type Todo = {
  title: string;
  isCompleted: boolean;
  timestamp: number;
};

const createNewTodo = (title: string): Todo => {
  return {
    title,
    isCompleted: false,
    timestamp: Date.now(),
  };
};

const addTodo = (todoList: Todo[], newTodoTitle: string): Todo[] => {
  return [...todoList, createNewTodo(newTodoTitle)];
};

const toggleTodo = (todoList: Todo[], todoTimestamp: number): Todo[] => {
  return todoList.map((todo) => {
    if (todo.timestamp !== todoTimestamp) {
      return todo;
    }

    return {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
  });
};

export { type Todo, addTodo, toggleTodo };
