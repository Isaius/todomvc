import useTodo from '../../hooks/useTodo';
import { Container, InputField } from './styles';

const Input = () => {
  const { handleTodoAddition } = useTodo();

  const handleSubmission = (event: React.FormEvent<HTMLInputElement>) => {
    const title = event.currentTarget.value;
    event.currentTarget.value = ""
    handleTodoAddition(title);
  }

  return (
    <Container className='todo-item'>
      <InputField type='text' className='todo-input' placeholder='What needs to be done?' onBlur={handleSubmission}/>
    </Container>
  );
};

export default Input;
