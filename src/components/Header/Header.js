import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = ({userName, userAvatar}) => {
  return (
    <header className="shop-header row">
      <Link to="/books">
        <div className="logo text-dark">JS BAND STORE / Oleksandr Romanov</div>
      </Link>
      <div className="shop-menu">
        <Link to="/cart">
          <i className="cart fa fa-shopping-cart"/>
        </Link>
        <div className="menu-item">
          <button className="btn btn-info">Sign-Out</button>
        </div>
        <div className="menu-item">
          <div className="pseudo-avatar">
            <img src={userAvatar} alt="avatar" className="real-avatar"/>
          </div>
        </div>
        <div className="menu-item">
          <div className="userName">{userName}</div>
        </div>
      </div>
    </header>
  )
};