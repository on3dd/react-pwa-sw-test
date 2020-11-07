import React from 'react';
import styled from 'styled-components';

import Card from '../../../models/Card';
import CardItem from './Item';

type CardListProps = {
  items: Card[];
}

const Div = styled.div`
  width: 100%;
  max-width: 500px;
`;

const CardList: React.FC<CardListProps> = (
  { items }: CardListProps
) => (
    <Div className="cards__list">
      {items.map(item => {
        return <CardItem key={item.title} {...item} />
      })}
    </Div>
  )

export default CardList;
