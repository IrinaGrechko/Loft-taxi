import './App.css';
import React from "react";
import {Home, HomeWithAuth} from "./home/Home";
import {Profile, ProfileWithAuth} from "./profile/Profile";
import {LoginForm, LoginFormWithAuth} from "./login/LoginForm";
import {RegistrationForm, RegistrationFormWithAuth} from "./registration/RegistrationForm";
import {withAuth} from "./AuthContext";

class App extends React.Component {
  constructor() {
    super();
    this.PAGES = {
      home: (props) => <HomeWithAuth {...props}/>,
      login: (props) => <LoginFormWithAuth {...props}/>,
      profile: (props) => <ProfileWithAuth {...props}/>,
      registration: (props) => <RegistrationFormWithAuth {...props}/>
    }
  }
  state = { currentPage: "login" };
  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({currentPage: page});
    } else {
      this.setState({currentPage: "login"});
    }
  };

  unauthenticate = () => {
    this.props.logOut();
    this.navigateTo('login');
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
              <button onClick= {this.unauthenticate}>
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {this.PAGES[this.state.currentPage]({ navigate: this.navigateTo})}
        </section>
      </main>
    </>
  }
}

export default withAuth(App);
