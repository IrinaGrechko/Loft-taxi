import React from "react";
import './login.css';
import PropTypes from 'prop-types';
import {withAuth} from "../AuthContext";

export class LoginForm extends React.Component {
    static propTypes = {
        navigate: PropTypes.func
    }

    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        this.props.logIn(email.value, password.value);
    }

    navigateToRegisterForm = () => {
        this.props.navigate("registration");
    }

    render() {
        //const {email, password} = this.state;
        return (
          <>{
              this.props.isLoggedIn ? this.props.navigate("home") : (
                <div className="login">
                    <form onSubmit={this.authenticate}>
                        <h4>Войти</h4>
                        <div className="login-form-item">
                            <label htmlFor="email">Email: </label>
                            <input id="email"
                                   type="email"
                                   name="email"
                                   size="28" />
                        </div>
                        <div className="login-form-item">
                            <label htmlFor="password">Password: </label>
                            <input id="password"
                                   type="password"
                                   name="password"
                                   size="28" />
                        </div>
                        <button type="submit">
                            Войти
                        </button>
                    </form>
                    <div>
                        <p>Новый пользователь?</p>
                        <p onClick={this.navigateToRegisterForm}>Зарегистрируйтесь</p>
                    </div>
                </div>
              )
          }</>
        );
    }
}

export const LoginFormWithAuth = withAuth(LoginForm);
