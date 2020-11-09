import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";

import fetchPosts from '../../../actions/fetchPosts';

import RootState from '../../../types/states';

import CardList from './List';
import CardPlaceholder from './Placeholder';

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Cards: React.FC = () => {
  const dispatch = useDispatch();

  const posts = useSelector(
    (state: RootState) => state.posts,
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = useMemo(() => {
    return posts.data.length === 0
      ? <CardPlaceholder />
      : <CardList items={posts.data} />
  }, [posts.data]);

  return (
    <Div className="cards">
      {renderPosts}
    </Div>
  )
};

export default Cards;
