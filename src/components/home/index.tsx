import React from 'react';
import styled from 'styled-components';

import Cards from './cards';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: inherit;
  max-width: inherit;
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Home: React.FC = () => (
  <Div className="home">
    <Container className="home__container">
      <Heading className="home__heading">
        Bruh momentum
    </Heading>
    </Container>
    <Container className="home__container">
      <Cards />
    </Container>
  </Div>
)

export default Home;
