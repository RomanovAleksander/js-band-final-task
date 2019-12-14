import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import StoreService from "../../services/StoreService";
import { userSignIn } from '../../actions';

import './signIn.css';

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
        localStorage.setItem(`userData`, JSON.stringify(data));
        console.log(data, localStorage)
      })
      .then(() => {
        history.push(`/books`);
      });
  };

  render() {
    const { username, minLength,  maxLength } = this.state;
    const { isAuthorized } = this.props;
    const isValid =  (username.length >= minLength && username.length <= maxLength) ? 'is-valid' : 'is-invalid';

    if (isAuthorized) {
      return <div className="already-authorized">You are already authorized</div>
    }

    return (
      <div className="container d-flex justify-content-center">
        <form className="d-flex flex-column align-items-center"
              onSubmit={this.onSubmit}>
          <img src="https://api.adorable.io/avatars/100/orange.png" alt="avatar" className="sign-in-avatar"/>
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
              <div className="invalid-feedback text-center">Field is not valid!</div>
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
