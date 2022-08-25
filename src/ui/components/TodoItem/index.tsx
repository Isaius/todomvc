import { Todo } from '../../../domain/Todo'
import useTodo from '../../hooks/useTodo';
import { Container } from './styles';

type TodoItemProps = {
  todo: Todo,
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { handleTodoStatusToggle } = useTodo();

  const handleToggle = () => handleTodoStatusToggle(todo) ;

  return (
    <Container className="todo-item">
      <span className="todo-item__checkbox">
        <input type="checkbox" checked={todo.isCompleted} onChange={handleToggle} />
      </span>

      <div className="todo-item__headline">
        <p>{todo.title}</p>
      </div>
    </Container>
  );
}

export default TodoItem;
