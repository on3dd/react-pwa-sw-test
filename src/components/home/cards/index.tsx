import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";

import fetchPosts from '../../../actions/fetchPosts';

import RootState from '../../../types/states';

import CardSpinner from './Spinner';
import CardList from './List';
import CardPlaceholder from './Placeholder';

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: inherit;
  max-width: inherit;
`;

const Cards: React.FC = () => {
  const dispatch = useDispatch();

  const posts = useSelector(
    (state: RootState) => state.posts,
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPlaceholder = useMemo(() => {
    return posts.isFetching
      ? <CardSpinner enabled={posts.isFetching} />
      : <CardPlaceholder />
  }, [posts.isFetching]);

  const renderList = useMemo(() => {
    return <CardList items={posts.data} />
  }, [posts.data]);

  const renderPosts = useMemo(() => {
    return posts.data.length === 0
      ? renderPlaceholder
      : renderList
  }, [posts.data, renderPlaceholder, renderList]);

  return (
    <Div className="cards">
      {renderPosts}
    </Div>
  )
};

export default Cards;
