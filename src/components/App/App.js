import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from "../Header";
import { HomePage, CartPage } from "../../pages";
import { BookDetails } from "../BookDetails";

import './app.css';

export const App = () => {
  return (
    <main className="container">
      <Header userName={'Alex'} />
        <Switch>
          <Route path="/books" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />
          <Route path="/books/:id"
                 render={({ match }) => {
                   const { id } = match.params;
                   return <BookDetails bookId={id}/>
                 }} />
        </Switch>
    </main>
  )
};
