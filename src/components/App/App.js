import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from "../Header";
import { HomePage, CartPage } from "../../pages";

import './app.css';

export const App = () => {
  return (
    <main className="container">
      <Header userName={'Alex'} />
        <Switch>
          <Route path="/"
                 component={HomePage}
                 exact
          />
          {/*<Redirect from="/" to/>*/}
          <Route path="/cart"
                 component={CartPage}
          />
        </Switch>
    </main>
  )
};
