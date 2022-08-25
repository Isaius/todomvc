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
  const todos = todoList.map((todo) => {
    if (todo.timestamp === todoTimestamp) {
      todo.isCompleted = !todo.isCompleted;
    }

    return todo;
  });

  return todos;
};

export { type Todo, addTodo, toggleTodo };
