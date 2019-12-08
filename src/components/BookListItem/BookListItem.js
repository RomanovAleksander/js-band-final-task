import React from 'react';
import './bookListItem.css';


export const BookListItem = ({book, onView}) => {
  const { title, author, price, cover } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={cover} alt="cover" />
      </div>
      <div className="book-details">
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
      </div>
      <div className="book-footer">
        <div className="book-price">{price}</div>
        <button
          onClick={onView}
          className="btn btn-primary add-to-cart"
        >
          View
        </button>
      </div>
    </div>
  )
};
