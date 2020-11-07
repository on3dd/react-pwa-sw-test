import React from 'react';
import styled from "styled-components";

import Card from '../../../models/Card';
import CardList from './List';

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const items: Card[] = [
  {
    title: "я роняю запад у",
    description: "байден козел гад ненавижу демократов",
  },
  {
    title: "а я ебу что ли",
    description: "я не знаю почему ты читаешь рэп",
  },
  {
    title: "да сука новый автомат",
    description: "то как мы валим на битах это на века"
  }
]

const Cards: React.FC = () => (
  <Div className="cards">
    <CardList items={items} />
  </Div>
);

export default Cards;
