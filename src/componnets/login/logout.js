import React, { useEffect } from 'react';
import userService from '../../redux/middleware/userCrud';

export default function Logout() {

    useEffect(() => {
        userService.logout();
        window.location = "/";
    }, [])
    return null
}