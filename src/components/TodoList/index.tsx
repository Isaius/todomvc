
import { Todo } from '../../domain/Todo';
import TodoItem from '../TodoItem';

type TodoListProps = {
  todos: Todo[],
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => <TodoItem todo={todo} />)}
    </div>
  );
}

export default TodoList;
