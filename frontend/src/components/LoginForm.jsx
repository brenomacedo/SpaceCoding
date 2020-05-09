import React from 'react'
import { FaCamera } from 'react-icons/fa'
import './LoginForm.css'

export default props => {

    const Register = (
        <>
            <div className='register-input'>
                <div className='register-image'>
                    <FaCamera size={20} color='black' />
                </div>
            </div>
            <input type="text" className="input-login" placeholder='username' />
            <input type="email" className="input-login" placeholder='email' />
            <input type="password" className="input-login" placeholder='password' />
            <input type="password" className="input-login" placeholder='confirm your password' />
            <button className='button-login' >LOGIN</button>
            <h5>Do you already have an account? <button>Login</button></h5>
        </>
    )

    const Login = (
        <>     
            <div className='login-logo'>
                <div className='login-image'></div>
                <h3>SpaceCoding</h3>
            </div>
            <input type="email" className="input-login" placeholder='email' />
            <input type="password" className="input-login" placeholder='password' />
            <button className='button-login' >LOGIN</button>
            <h5>Don't have an account? <button>Register</button></h5> 
        </>
    )

    return (
        <div className="login-form">
            {Register}
        </div>
    )
}