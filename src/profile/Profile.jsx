import React from 'react'
import {connect} from 'react-redux';

export const Profile = () => {
  return <>Профиль пользователя</>
};

export const ProfileWithAuth = connect(null, null)(Profile);
