import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = ({userName}) => {
  return (
    <header className="shop-header row">
      <Link to="/books">
        <div className="logo">JS BAND STORE / Oleksandr Romanov</div>
      </Link>
      <div className="shop-menu">
        <Link to="/cart">
          <i className="cart fa fa-shopping-cart"/>
        </Link>
        <div className="menu-item">
          <button className="btn btn-primary">Sign-Out</button>
        </div>
        <div className="menu-item row">
          <img src="https://api.adorable.io/avatars/100/abott@adorable.png" alt="avatar" className="rounded-circle"/>
          <div className="userName">{userName}</div>
        </div>
      </div>
    </header>
  )
};