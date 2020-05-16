import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './LoginForm.css'
import axios from 'axios'

export default props => {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(false)
    const [loggingin, setLoggingIn] = useState(false)
    const [warning, setWarning] = useState('')

    const verifyNullCamps = (password, email) => {
        if(password === '' || email === '') {
            setStatus(false)
            return
        }

        setStatus(true)
        
    }

    const login = async () => {
        try{
            const user = await axios.get(`/user?email=${email}&password=${password}&username=${email}`)
            if(user.data) {
                axios.defaults.headers.common['authorization'] = `Bearer ${user.data.token}`
                localStorage.setItem('token', `Bearer ${user.data.token}`)
                history.push('/profile', { user: user.data.user })
            }
        }catch(err){
            setWarning('USUARIO OU SENHA INCORRETOS!')
            setStatus(true)
            setLoggingIn(false)
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
            <input readOnly={loggingin} value={email} type="email" className="input-login" placeholder='email'
            onChange={e => {
                verifyNullCamps(password, e.target.value)
                setEmail(e.target.value)
            }} />
            <input readOnly={loggingin} value={password} type="password" className="input-login" placeholder='password'
            onChange={e => {
                verifyNullCamps(e.target.value, email)
                setPassword(e.target.value)
            }} />
            <div className='warning'>{warning}</div>
            <button className='button-login' onClick={() => {
                if(status) {
                    setLoggingIn(true)
                    setStatus(false)
                    login()
                }
            }} style={{
                backgroundColor: status ? '#651fff' : '#a2a2a3'
            }} >LOGIN</button>
            <h5>Don't have an account? <button onClick={register}>Register</button></h5>
        </div>
    )
}