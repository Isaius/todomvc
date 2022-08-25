import styled from 'styled-components';

const Container = styled.div({
  display: 'flex',
  border: '2px solid gray',
  borderRadius: '4px',
  maxWidth: '70%',
  width: '70%',
});

const InputField = styled.input({
  border: 'none',
  width: '100%',
  height: '25px',
});

export { Container, InputField };