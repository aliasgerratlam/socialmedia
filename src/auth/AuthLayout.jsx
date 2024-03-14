import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
    const isAuthenticate = false;
    
    if(isAuthenticate) return <Navigate to={"/"} />
    else return <Outlet />
}

export default AuthLayout