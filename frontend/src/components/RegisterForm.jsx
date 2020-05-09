import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import './LoginForm.css'

export default props => {

    const [image, setImage] = useState(null)
    const [imagePath, setImagePath] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    return (
        <div className="login-form">
            <div className='register-input'>
                <label htmlFor='image-input' className='register-image'>
                    <FaCamera size={20} color='black' />
                </label>
                <input type='file' id='image-input' onChange={e => {
                    setImagePath(e.target.value.split('\\').reverse()[0])
                    let reader = new FileReader()
                    reader.readAsDataURL(e.target.files[0])
                    reader.onload = () => {
                        setImage(reader.result.split(',')[1])
                    }
                    reader.onerror = () => {
                        console.log('ocorreu um erro inesperado!')
                    }
                }} />
                {imagePath}
            </div>
            <input value={username} type="text" className="input-login" placeholder='username'
            onChange={e => setUsername(e.target.value)} />
            <input value={email} type="email" className="input-login" placeholder='email'
            onChange={e => setEmail(e.target.value)} />
            <input value={password} type="password" className="input-login" placeholder='password'
            onChange={e => setPassword(e.target.value)} />
            <input value={confirmPassword} type="password" className="input-login" placeholder='confirm your password'
            onChange={e => setConfirmPassword(e.target.value)} />
            <button className='button-login' >LOGIN</button>
            <h5>Do you already have an account? <button>Login</button></h5>
        </div>
    )
}