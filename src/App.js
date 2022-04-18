import React from "react";
import {HomeWithAuth} from "./home/Home";
import {ProfileWithAuth} from "./profile/Profile";
import {LoginFormWithAuth} from "./login/LoginForm";
import {RegistrationFormWithAuth} from "./registration/RegistrationForm";
import {connect} from 'react-redux';
import {logOut} from './actions';
import HeaderMenu from "./home/HeaderMenu";
import {Stack} from "@mui/material";
import {Link, Route, Routes} from 'react-router-dom'
import {PrivateRoute} from './PrivateRoute'

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

  unauthenticate = () => {
    this.props.logOut();
  };

  render() {
    return <>
      <Stack>
        {
          this.props.isLoggedIn ? (<HeaderMenu unauthenticate = {this.unauthenticate}/>) : ''
        }
        <main>
          <section>
            <Routes>
              <Route exact path="/" element={<LoginFormWithAuth/>}/>
              <Route exact path="/map" element={
                <PrivateRoute><HomeWithAuth/></PrivateRoute>
              }/>
              <Route exact path="/profile" element={
                <PrivateRoute><ProfileWithAuth/></PrivateRoute>
              }/>
              <Route exact path="/registration" element={<RegistrationFormWithAuth/>}/>
            </Routes>
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
