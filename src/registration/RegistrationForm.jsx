import React from "react";
import './registration.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

export class RegistrationForm extends React.Component {
  state = {email: '', name: '', password: ''};

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.email + " " + this.state.password);
    this.props.navigate("home");
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const {email, name, password} = this.state;
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <h4>Регистрация</h4>
          <div className="login-form-item">
            <label htmlFor="email">Email: </label>
            <input id="email"
                   type="email"
                   name="email"
                   value={email}
                   onChange={this.handleChange}
                   size="28"/>
          </div>
          <div className="login-form-item">
            <label htmlFor="name">Как Вас зовут?: </label>
            <input id="name"
                   type="name"
                   name="name"
                   value={name}
                   onChange={this.handleChange}
                   size="28"/>
          </div>
          <div className="login-form-item">
            <label htmlFor="password">Password: </label>
            <input id="password"
                   type="password"
                   name="password"
                   value={password}
                   onChange={this.handleChange}
                   size="28"/>
          </div>
          <button type="submit">
            Зарегистрироваться
          </button>
        </form>
        <div>
          <p>Уже зарегистрированы</p>
          <Link to="/">Войти</Link>
        </div>
      </div>
    );
  }
}

export const RegistrationFormWithAuth = connect(null, null)(RegistrationForm);
