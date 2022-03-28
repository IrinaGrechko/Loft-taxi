import React from "react";
import './login.css';

export class LoginForm extends React.Component {
    state = { email: '', password: '' };
    constructor(props) {
        super();
        this.navigateTo = props.navigateTo;
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email + " " + this.state.password);
        this.navigateTo("about");
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    navigateToRegisterForm = () => {
        this.navigateTo("registration");
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <h4>Войти</h4>
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
                        <label htmlFor="password">Password: </label>
                        <input id="password"
                               type="password"
                               name="password"
                               value={password}
                               onChange={this.handleChange}
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
        );
    }
}