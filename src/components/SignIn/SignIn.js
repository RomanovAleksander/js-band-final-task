import React from 'react';
import { connect } from "react-redux";
import './signIn.css';
import StoreService from "../../services/StoreService";

import { usernameLoaded } from '../../actions'

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

    StoreService.post('/signin', { "username": username })
      .then((data) => {
        this.props.usernameLoaded(data);
        console.log(data)
      });
  };

  render() {
    const { username, minLength,  maxLength} = this.state;
    const isValid =  (username.length >= minLength && username.length <= maxLength) ? 'is-valid' : 'is-invalid';

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
                     max={maxLength}
                     min={minLength}
                     value={username}
                     placeholder="type Username"
                     id="sign-in-input"
                     required/>
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

const mapDispatchToProps = {
  usernameLoaded
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
