import React from 'react';
import styled from 'styled-components';

import Card from '../../../models/Card';

type CardItemProps = Card;

const Div = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1.25rem 2rem;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0 0.5rem 0.75rem 0 rgba(0,0,0,0.15);
`;

const Title = styled.h2`
  margin: 0 0 0.5rem 0;
`;

const Description = styled.span``;

const CardItem: React.FC<CardItemProps> = ({
  title, description
}: CardItemProps) => (
    <Div className="cards__item">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Div>
  )

export default CardItem;
