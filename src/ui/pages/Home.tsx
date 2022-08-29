import { useEffect } from 'react';

import Input from '../components/Input';
import TodoList from '../components/TodoList';  
import useTodo from '../hooks/useTodo';
import { Container, Main } from './styles'

function App() {
  const { todos } = useTodo()

  useEffect(() => {
    console.log(todos)
  }, [todos])
  
  return (
    <Container className="todo-home">
      <Main className="todo-home__main">
        <Input />
        <TodoList todos={todos} />
      </Main>
    </Container>
  );
}

export default App;
