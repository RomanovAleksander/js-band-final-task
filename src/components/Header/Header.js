import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = ({userName, userAvatar}) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">JS BAND STORE / Oleksandr Romanov</div>
      </Link>
      <div className="shop-menu row">
        <Link to="/cart">
          <div>
            <i className="cart fa fa-shopping-cart"/>
          </div>
        </Link>
        <button className="btn btn-info">Sign-Out</button>
        <div className="oval">
          <img src={userAvatar} alt="userAvatar"/>
        </div>
        <div className="userName">{userName}</div>
      </div>
    </header>
  )
};