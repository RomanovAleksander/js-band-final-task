import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BooksPage, CartPage, SignInPage, BookPage, NotFoundPage } from "../../pages";
import PrivateRoute from '../Routing/PrivateRoute';

import './app.css';

export const App = () => {
  return (
    <div className="container">
      <Switch>
        <Redirect from="/" to="/signin" exact/>
        <Route path="/signin" component={SignInPage}/>
        <PrivateRoute path="/books" component={BooksPage} exact/>
        <PrivateRoute path="/cart" component={CartPage}/>
        <PrivateRoute path="/books/:id"
                      component={({match}) => {
                        const {id} = match.params;
                        if (id > 77) {
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
