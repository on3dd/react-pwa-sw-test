import React from 'react';

import GlobalStyles from './styles/global';
import Home from './components/home/index';

const App: React.FC = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
