import './App.css';
import React from "react";
import {Home} from "./home/Home";
import {Profile} from "./profile/Profile";
import {LoginForm} from "./login/LoginForm";
import {RegistrationForm} from "./registration/RegistrationForm";

class App extends React.Component {
  constructor() {
    super();
    this.PAGES = {
      home: <Home />,
      login: <LoginForm navigateTo={this.navigateTo}/>,
      profile: <Profile />,
      registration: <RegistrationForm navigateTo={this.navigateTo}/>
    }
  }
  state = { currentPage: "login" };
  navigateTo = (page) => {
    this.setState({currentPage: page});
  };
  render() {
    return <>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => {this.navigateTo("home")}}>
                Карта
              </button>
            </li>
            <li>
              <button onClick={() => {this.navigateTo("profile")}}>
                Профиль
              </button>
            </li>
            <li>
              <button onClick={() => {this.navigateTo("login")}}>
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {this.PAGES[this.state.currentPage]}
        </section>
      </main>
    </>
  }
}

export default App;
