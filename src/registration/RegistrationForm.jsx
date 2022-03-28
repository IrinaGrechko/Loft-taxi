import React from "react";
import './registration.css';

export class RegistrationForm extends React.Component {
    state = { email: '', name: '', password: '' };
    constructor(props) {
        super();
        this.navigateTo = props.navigateTo;
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email + " " + this.state.password);
        this.navigateTo("home");
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    navigateToLoginForm = () => {
        this.navigateTo("login");
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
                               size="28" />
                    </div>
                    <div className="login-form-item">
                        <label htmlFor="name">Как Вас зовут?: </label>
                        <input id="name"
                               type="name"
                               name="name"
                               value={name}
                               onChange={this.handleChange}
                               size="28" />
                    </div>
                    <div className="login-form-item">
                        <label htmlFor="password">Password: </label>
                        <input id="password"
                               type="password"
                               name="password"
                               value={password}
                               onChange={this.handleChange}
                               size="28" />
                    </div>
                    <button type="submit">
                        Зарегистрироваться
                    </button>
                </form>
                <div>
                    <p>Уже зарегистрированы</p>
                    <p onClick={this.navigateToLoginForm}>Войти</p>
                </div>
            </div>
        );
    }
}
