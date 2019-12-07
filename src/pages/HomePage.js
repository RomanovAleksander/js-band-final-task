import React from 'react';
import { BookList } from '../components/BookList';
import { Filter } from '../components/Filter'

export const HomePage = () => {
  return (
    <div>
      <Filter />
      <BookList />
    </div>
  );
};
