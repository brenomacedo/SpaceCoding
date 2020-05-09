import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import './LoginForm.css'

export default props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return (
        <div className="login-form">
            <div className='login-logo'>
                <div className='login-image'></div>
                <h3>SpaceCoding</h3>
            </div>
            <input value={email} type="email" className="input-login" placeholder='email'
            onChange={e => setEmail(e.target.value)} />
            <input value={password} type="password" className="input-login" placeholder='password'
            onChange={e => setPassword(e.target.value)} />
            <button className='button-login' >LOGIN</button>
            <h5>Don't have an account? <button>Register</button></h5> 
        </div>
    )
}