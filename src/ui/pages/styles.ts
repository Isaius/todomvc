import styled from 'styled-components';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  border: '2px solid gray',
  maxWidth: '100%',
  width: '100%',
});

const Main = styled.div({
  maxWidth: '40%',
  width: '40%',
  padding: '15px',
});

export { Container, Main };
