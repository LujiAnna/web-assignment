import React from 'react';
import Content from './components/Content';
import Navigation from './components/Navigation';
import styled from 'styled-components';
// import px2vw from './utils/px2vw';


const Container = styled.div `
min-height: 100vh;
/* font-size: calc(10px + 2vmin); */
    color: white;

`

const Main = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const App = () => {

  return (
    <Container>
      <Navigation/>
        <Main>
          <Content  />
        </Main>
    </Container>
  );
}

export default App;
