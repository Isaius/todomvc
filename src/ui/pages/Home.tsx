import { useEffect } from 'react';

import Input from '../components/Input';
import TodoList from '../components/TodoList';  
import useTodo from '../hooks/useTodo';
import { Container } from './styles'

function App() {
  const { todos } = useTodo()

  useEffect(() => {
    console.log(todos)
  }, [todos])
  
  return (
    <Container className="todo-home">
      <Input />
      <TodoList todos={todos} />
    </Container>
  );
}

export default App;
