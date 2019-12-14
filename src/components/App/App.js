import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from "../Header";
import { HomePage, CartPage, SignInPage } from "../../pages";
import { BookDetails } from "../BookDetails";

import './app.css';

export const App = () => {
  return (
    <div className="container">
      <Header />
        <Switch>
          <Redirect from="/" to="/signin" exact />
          <Route path="/signin" component={SignInPage} />
          <Route path="/books" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />
          <Route path="/books/:id"
                 render={({ match }) => {
                   const { id } = match.params;
                   if (id > 77) {
                     return <div>Not Found</div>
                   }
                   return <BookDetails bookId={id}/>
                 }} />
        </Switch>
    </div>
  )
};
