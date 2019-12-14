import React from 'react';
import { Header } from '../components/Header';
import { BookDetails } from '../components/BookDetails';

export const BookPage = ({ bookId }) => {
  return (
    <>
      <Header />
      <BookDetails bookId={bookId}/>
    </>
  );
};
