type Todo = {
  title: string;
  isCompleted: boolean;
  creationDate: string;
};

const addTodo = (todoList: Todo[], newTodo: Todo): Todo[] => {
  return [...todoList, newTodo];
};

export { type Todo, addTodo };
