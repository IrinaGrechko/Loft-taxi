import React from "react";
import './login.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {authenticate} from '../actions';
import {Link, Navigate} from 'react-router-dom'

export class LoginForm extends React.Component {

  authenticate = (event) => {
    event.preventDefault();
    const {email, password} = event.target;
    this.props.authenticate(email.value, password.value);
  }

  render() {
    //const {email, password} = this.state;
    return (
      <>{
        this.props.isLoggedIn ? <Navigate to="/map"/> : (
          <div className="login">
            <form onSubmit={this.authenticate}>
              <h4>Войти</h4>
              <div className="login-form-item">
                <label htmlFor="email">Email: </label>
                <input id="email"
                       type="email"
                       name="email"
                       size="28"/>
              </div>
              <div className="login-form-item">
                <label htmlFor="password">Password: </label>
                <input id="password"
                       type="password"
                       name="password"
                       size="28"/>
              </div>
              <button type="submit">
                Войти
              </button>
            </form>
            <div>
              <p>Новый пользователь?</p>
              <Link to="/registration">Зарегистрируйтесь</Link>
            </div>
          </div>
        )
      }</>
    );
  }
}

export const LoginFormWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {authenticate}
)(LoginForm);
