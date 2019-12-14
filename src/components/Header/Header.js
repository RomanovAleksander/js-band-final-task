import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { userSignOut } from "../../actions";

import './header.css';

const Header = ({ username, avatar, isAuthorized, booksInCart, history, userSignOut}) => {
  const signOut = () => {
    userSignOut();
    history.push(`/signin`);
  };

  const authorized = (
    <div className="shop-menu">
      <Link to="/cart">
        <i className="cart fa fa-shopping-cart"/>
        <span className="cart-count">{booksInCart}</span>
      </Link>
      <div className="menu-item">
        <button className="btn btn-primary"
                onClick={signOut}
        >
          Sign-Out
        </button>
      </div>
      <div className="menu-item row">
        <img src={avatar} alt="avatar" className="rounded-circle"/>
        <div className="userName">{username}</div>
      </div>
    </div>
  );

  return (
    <header className="shop-header row">
      <Link to="/books">
        <div className="logo">JS BAND STORE / Oleksandr Romanov</div>
      </Link>
      {isAuthorized ? authorized : null}
    </header>
  )
};

const mapStateToProps = (state) => {
  return {
    booksInCart: state.bookDetails.booksInCart,
    username: state.userData.username,
    avatar: state.userData.avatar,
    token: state.userData.token,
    isAuthorized: state.userData.isAuthorized
  }
};

const mapDispatchToProps = {
  userSignOut
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
