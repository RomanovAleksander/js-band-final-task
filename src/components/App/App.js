import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { BooksPage, CartPage, SignInPage, BookPage, NotFoundPage } from "../../pages";
import PrivateRoute from '../Routing/PrivateRoute';

import './app.scss';

const App = ({ isAuthorized }) => {
  return (
    <div className="container">
      <Switch>
        <Redirect from="/"
                  to={isAuthorized ? "/books" : "/signin"}
                  exact
        />
        <Route path="/signin" component={SignInPage}/>
        <PrivateRoute path="/books" component={BooksPage} exact/>
        <PrivateRoute path="/cart" component={CartPage}/>
        <PrivateRoute path="/books/:id"
                      component={({match, booksQuantity}) => {
                        const {id} = match.params;
                        if (id > (booksQuantity || 77)) {
                          return <NotFoundPage />
                        }
                        return <BookPage bookId={id} />
                      }}
                      />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.userData.isAuthorized,
    booksQuantity: state.bookList.booksQuantity
  }
};

export default connect(mapStateToProps)(App);
