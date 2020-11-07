import React from 'react';
import styled from 'styled-components';

import Cards from './cards';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Home: React.FC = () => (
  <Div className="home">
    <Heading className="home__heading">
      Bruh momentum
    </Heading>
    <Cards />
  </Div>
)

export default Home;
