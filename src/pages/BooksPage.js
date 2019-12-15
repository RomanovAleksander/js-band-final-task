import React from 'react';
import { withRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { BookList } from '../components/BookList';
import { Filter } from '../components/Filter';
import { ScrollArrow } from '../components/ScrollArrow';

const BooksPage = ({ history }) => {
  return (
    <>
      <Header />
      <Filter />
      <BookList onView={(bookId) => {
        history.push(`/books/${bookId}`);
      }} />
      <ScrollArrow />
    </>
  );
};

export default withRouter(BooksPage);
