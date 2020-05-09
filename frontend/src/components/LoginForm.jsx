import React from 'react'
import './LoginForm.css'

export default props => (
    <div className="login-form">
        <div className='login-logo'>
            <div className='login-image'></div>
            <h3>SpaceCoding</h3>
        </div>
        <input type="email" className="input-login" placeholder='email' />
        <input type="password" className="input-login" placeholder='password' />
        <button className='button-login' >LOGIN</button>
    </div>
)