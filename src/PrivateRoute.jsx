import react from 'react'
import {Route, Navigate} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'

export const PrivateRoute = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}))(
  ({children}) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return isLoggedIn ? children : <Navigate to="/"/>
  }
);
