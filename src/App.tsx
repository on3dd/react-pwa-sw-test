import React from 'react';
import styled from 'styled-components';

import GlobalStyles from './styles/global';
import Home from './components/home/index';

const Div = styled.div`
  /* display: flex;
  justify-content: center; */
`;

const App: React.FC = () => {
  return (
    <Div className="app">
      <GlobalStyles />
      <Home />
    </Div>
  );
}

export default App;
