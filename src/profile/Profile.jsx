import React from 'react'
import {withAuth} from "../AuthContext";

export const Profile = () => {
    return <>Профиль пользователя</>
};

export const ProfileWithAuth = withAuth(Profile);
