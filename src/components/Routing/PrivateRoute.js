import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { NotFoundPage } from "../../pages";

const PrivateRoute = ({ component: Component, isAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={(props) => !isAuthorized ?
      <NotFoundPage /> :
      <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthorized: state.userData.isAuthorized
});

export default connect(mapStateToProps)(PrivateRoute);