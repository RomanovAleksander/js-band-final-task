import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { StoreService, LocalStorageService }  from '../../services';
import { signInRequest, signInSuccess, signInError } from '../../actions/signin/actions';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../ErrorIndicator';

import './signIn.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      minLength: 4,
      maxLength: 16,
    }
  }

  onChange = ({ target }) => {
    this.setState({
      username: target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username } = this.state;
    const { history, signInRequest, signInSuccess, signInError } = this.props;

    signInRequest();
    StoreService.post('/signin', { "username": username })
      .then((data) => {
        signInSuccess(data);
        LocalStorageService.setItem('userData', data);
        history.push(`/books`);
      })
      .catch((err) => {
        signInError(err)
      })
  };

  render() {
    const { username, minLength,  maxLength } = this.state;
    const { isAuthorized, loading, error } = this.props;
    const isValid = (username.length >= minLength && username.length <= maxLength) ? 'is-valid' : 'is-invalid';

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <ErrorIndicator />
    }

    if (isAuthorized) {
      return <div className="already-authorized">You are already authorized</div>
    }

    return (
      <div className="container d-flex justify-content-center sign-in-wrapper">
        <form className="d-flex flex-column align-items-center"
              onSubmit={this.onSubmit}>
          <label className="d-flex flex-column align-items-center" htmlFor="sign-in-input">
            <b>Username</b>
            <div className="d-flex flex-column justify-content-start mt-2">
              <input type="text"
                     className={`form-control ${isValid}`}
                     onChange={this.onChange}
                     maxLength={maxLength}
                     minLength={minLength}
                     value={username}
                     placeholder="type Username"
                     id="sign-in-input"
                     required />
              <div className="invalid-feedback text-center position-relative">
                Field is not valid!
                <img src="https://api.hello-avatar.com/adorables/face/eyes8/nose3/mouth7/dc3545/155" alt="avatar" className="sign-in-avatar invalid-img"/>
              </div>
              <div className="valid-feedback text-center position-relative">
                <img src="https://api.hello-avatar.com/adorables/face/eyes1/nose3/mouth9/28a745/155" alt="avatar" className="sign-in-avatar valid-img"/>
              </div>
            </div>
          </label>
          <button className="btn btn-primary sign-in w-100"
                  type="submit">
            Sign-In
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.userData.isAuthorized,
    loading: state.userData.loading,
    error: state.userData.error
  }
};

const mapDispatchToProps = {
  signInRequest,
  signInSuccess,
  signInError
};

export default withRouter(
  connect(
    mapStateToProps, mapDispatchToProps
  )(SignIn)
);
