import React from 'react';
import './bookListItem.css';


export const BookListItem = ({book, onView}) => {
  const { title, author, price, cover } = book;
  return (
    <div className="book-list-item">
      <img src={cover} alt="cover" className="cart-img-top"/>
      <div className="book-details">
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
      </div>
      <div className="book-footer">
        <div className="book-price">{price} $</div>
        <button
          onClick={onView}
          className="btn btn-primary"
        >
          View
        </button>
      </div>
    </div>
  )
};
