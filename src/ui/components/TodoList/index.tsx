
import { Todo } from '../../../domain/Todo'
import TodoItem from '../TodoItem';
import { Container } from './styled';

type TodoListProps = {
  todos: Todo[],
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <Container className="todo-list">
      {todos.map((todo) => <TodoItem todo={todo} />)}
    </Container>
  );
}

export default TodoList;
