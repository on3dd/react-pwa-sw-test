import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../../utils/constants';

const Container = styled.div`
  width: 100%;
  text-align: center;
  text-transform: lowercase;
`;

const Heading = styled.h1`
  display: block;
  margin: 0;
  font-size: 5rem;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 7.5rem;
  }

  @media (min-width: ${BREAKPOINTS.laptop}) {
    font-size: 10rem;
  }
`;

const Text = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const CardPlaceholder: React.FC = () => (
  <Container className="posts-container">
    <Heading className="posts-heading">
      Oops..
    </Heading>

    <Text className="posts-text">
      There are no posts here yet 😔
    </Text>
  </Container>
)

export default CardPlaceholder;
