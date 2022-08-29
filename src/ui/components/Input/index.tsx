import { useState } from 'react'

import useTodo from '../../hooks/useTodo';
import { Container, InputField } from './styles';

const Input = () => {
  const { handleTodoAddition } = useTodo();
  const [inputValue, setInputValue] = useState("")

  const handleKeyboardSubmission = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleTodoAddition(inputValue)
      clearInput()
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const clearInput = () => {
    setInputValue("")
  }

  return (
    <Container className='todo-item'>
      <InputField
        type='text'
        className='todo-input'
        value={inputValue}
        placeholder='What needs to be done?'
        onChange={handleInputChange}
        onKeyDown={handleKeyboardSubmission} />
    </Container>
  );
};

export default Input;
