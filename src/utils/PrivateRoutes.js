import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    let auth = { token: false }

    if (localStorage.getItem('token') !== null) {
        auth.token = true
        console.log("innnnnnnnnnn");
        // return (

        //     < Outlet />
        // )
    }
    else
        auth.token = false
    return (
        auth.token ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default PrivateRoutes