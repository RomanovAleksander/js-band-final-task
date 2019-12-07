import React from 'react';
import './header.css';

export const Header = ({ userName, userAvatar }) => {
  return (
    <header className="shop-header row">
      <a href="#" className="logo text-dark">JS BAND STORE / Oleksandr Romanov</a>
      <div className="shop-menu row">
        <a href="#">
          <i className="cart fa fa-shopping-cart" />
        </a>
        <button className="btn btn-info">Sign-Out</button>
        <div className="oval">
          <img src={userAvatar} alt="userAvatar" />
        </div>
        <div className="userName">{userName}</div>
      </div>
    </header>
  )
};