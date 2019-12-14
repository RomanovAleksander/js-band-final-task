import React from 'react';
import { withRouter } from 'react-router-dom';
import { BookList } from '../components/BookList';
import { Filter } from '../components/Filter';
import { ScrollArrow } from "../components/ScrollArrow";

const HomePage = ({ history }) => {
  return (
    <>
      <Filter />
      <BookList onView={(bookId) => {
        history.push(`/books/${bookId}`);
      }}/>
      <ScrollArrow />
    </>
  );
};

export default withRouter(HomePage);