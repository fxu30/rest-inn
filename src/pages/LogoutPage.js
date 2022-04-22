import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/apiCalls';

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        logout(dispatch);
        navigate("/")
    })
    return (
        <div>Logging Out</div>
    )
}

export default LogoutPage