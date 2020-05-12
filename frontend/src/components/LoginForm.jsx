import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './LoginForm.css'
import axios from 'axios'

export default props => {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        const user = await axios.get(`/user?email=${email}&password=${password}&username=${email}`)

        if(user.data) {
            history.push('/profile', { user: user.data })
        }
    }

    const register = () => {
        history.push('/register')
    }


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
            <button className='button-login' onClick={login} >LOGIN</button>
            <h5>Don't have an account? <button onClick={register}>Register</button></h5> 
        </div>
    )
}