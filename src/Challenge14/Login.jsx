import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginWithEmail, loginWithGoogle } from './slices/userSlice'

import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleEmailLogin = (e) => {
        e.preventDefault();
        dispatch(loginWithEmail(email, password));
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        dispatch(loginWithGoogle());
    };

    return (
        <>
            <form onSubmit={handleEmailLogin} className="login-form">
                <h2>Iniciar sesión</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">Ingresar</button>
                <button  type="submit" onClick={handleGoogleLogin}>Login Google</button>

            </form>
        </>
    )
}

export default Login