import React from "react";
import {HomeWithAuth} from "./home/Home";
import {ProfileWithAuth} from "./profile/Profile";
import {LoginFormWithAuth} from "./login/LoginForm";
import {RegistrationFormWithAuth} from "./registration/RegistrationForm";
import {connect} from 'react-redux';
import {logOut} from './actions';
import HeaderMenu from "./home/HeaderMenu";
import {Stack} from "@mui/material";

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
    if (this.props.isLoggedIn || page === "registration") {
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
      <Stack>
        {
          this.props.isLoggedIn ? (<HeaderMenu unauthenticate = {this.unauthenticate} navigateTo = {this.navigateTo}/>) : ''
        }
        <main>
          <section>
            {this.PAGES[this.state.currentPage]({ navigate: this.navigateTo})}
          </section>
        </main>
      </Stack>
    </>
  }
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  {logOut}
)(App);
