import { Todo } from '../../domain/Todo';

type TodoItemProps = {
  todo: Todo,
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className="todo-item">
      <span className="todo-item__checkbox"><input type="checkbox"></input></span>

      <div className="todo-item__headline">
        <p>{todo.title}</p>
      </div>
    </div>
  );
}

export default TodoItem;
