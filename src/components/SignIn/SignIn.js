import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { StoreService, LocalStorageService }  from '../../services';
import { userSignIn } from '../../actions';

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
    const { history } = this.props;

    StoreService.post('/signin', { "username": username })
      .then((data) => {
        this.props.userSignIn(data);
        LocalStorageService.setItem('userData', data);
        history.push(`/books`);
      });
  };

  render() {
    const { username, minLength,  maxLength } = this.state;
    const { isAuthorized } = this.props;
    const isValid = (username.length >= minLength && username.length <= maxLength) ? 'is-valid' : 'is-invalid';

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
                <img src="https://api.adorable.io/avatars/face/eyes8/nose3/mouth7/dc3545/155" alt="avatar" className="sign-in-avatar invalid-img"/>
              </div>
              <div className="valid-feedback text-center position-relative">
                <img src="https://api.adorable.io/avatars/face/eyes1/nose3/mouth9/28a745/155" alt="avatar" className="sign-in-avatar valid-img"/>
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
    isAuthorized: state.userData.isAuthorized
  }
};

const mapDispatchToProps = {
  userSignIn
};

export default withRouter(
  connect(
    mapStateToProps, mapDispatchToProps
  )(SignIn)
);
