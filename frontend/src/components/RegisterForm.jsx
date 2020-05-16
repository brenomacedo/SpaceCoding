import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import './LoginForm.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default props => {

    const [image, setImage] = useState(null)
    const [imagePath, setImagePath] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState(false)
    const [warnings, setWarnings] = useState({})
    const [registering, setRegistering] = useState(false)
    const history = useHistory()

    const verifyPassword = password => {
        if(password.length < 8){
            setWarnings({
                ...warnings,
                password: 'Your password must be at least 8 characters'
            })
        }else{
            delete warnings.password
        }
    }

    const verifyUsername = username => {
        if(username.length < 4) {
            setWarnings({
                ...warnings,
                username: 'Your username must be at least 4 characters'
            })
        }else{
            delete warnings.username
        }
    }

    const verifyName = name => {
        if(name.length < 2) {
            setWarnings({
                ...warnings,
                name: 'Your username must be at least 2 characters'
            })
        }else{
            delete warnings.name
        }
    }

    const verifyEmail = email => {
        if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            setWarnings({
                ...warnings,
                email: 'Put a valid email'
            })
        }else{
            delete warnings.email
        }
    }

    const verifyConfirmPassword = confirmPassword => {
        if(confirmPassword !== password){
            setWarnings({
                ...warnings,
                confirmPassword: 'Your password and confirmPassword inputs must be equals'
            })
        }else{
            delete warnings.confirmPassword
        }
    }

    const verifyingBlanks = (payload) => {

        let usernameP = payload.username ? payload.username : username
        let nameP = payload.name ? payload.name : name
        let emailP = payload.email ? payload.email : email
        let passwordP = payload.password ? payload.password : password
        let confirmPasswordP = payload.confirmPassword ? payload.confirmPassword : confirmPassword

        if(usernameP.length < 4){
            setStatus(false)
            return
        }

        if(nameP.length < 2){
            setStatus(false)
            return
        }

        if(!emailP.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
           setStatus(false)
           return 
        }

        if(passwordP.length < 8){
            setStatus(false)
            return
        }

        if(passwordP !== confirmPasswordP){
            setStatus(false)
            return
        }

        setStatus(true)
    }

    const login = () => {
        history.push('/')
    }

    const handleImage = (value, files) => {

        if(!files){
            return false
        }

        if(files.type !== 'image/jpeg' && files.type !== 'image/png') {
            setImagePath('FORMATO DE IMAGEM INVÁLIDO!')
            return false
        }

        setImagePath(value.split('\\').reverse()[0])
        let reader = new FileReader()
        reader.readAsDataURL(files)
        reader.onload = () => {
            setImage(reader.result.split(',')[1])
        }
        reader.onerror = () => {
            console.log('ocorreu um erro inesperado!')
        }
    }

    const register = async () => {

        axios.post('https://us-central1-spacecoding-16607.cloudfunctions.net/uploadUserImage', {
            image
        }).then(async resp => {

            const user = {
                name,
                username,
                email,
                password,
                image: resp.data.imageUrl
            }

            try{
                await axios.post('/user', user)
                history.push('/login')
            }catch(err){
                console.log(err)
                axios
                .post('https://us-central1-spacecoding-16607.cloudfunctions.net/deleteImage' , {
                    filename: resp.data.destination
                })
                alert('an unexpected error ocurred')
                setWarnings({...warnings, user: 'THIS USER IS ALREADY REGISTERED'})
                setRegistering(false)
                setStatus(true)
            }
            
                
            
                
        })
        .catch(err => console.log(err))
    }


    return (
        <div className="login-form">
            <div className='register-input'>
                <label htmlFor='image-input' className='register-image'>
                    <FaCamera size={20} color='black' />
                </label>
                <input type='file' id='image-input'
                onChange={e => handleImage(e.target.value, e.target.files[0])} />
                {imagePath}
            </div>
            <input readOnly={registering} value={name} type="text" className="input-login" placeholder='name'
            onChange={e => {
                setName(e.target.value)
                verifyName(e.target.value)
                verifyingBlanks({ name: e.target.value })
            }} />
            <input readOnly={registering} value={username} type="text" className="input-login" placeholder='username'
            onChange={e => {
                setUsername(e.target.value)
                verifyUsername(e.target.value)
                verifyingBlanks({ username: e.target.value })
            }} />
            <input readOnly={registering} value={email} type="email" className="input-login" placeholder='email'
            onChange={e => {
                setEmail(e.target.value)
                verifyEmail(e.target.value)
                verifyingBlanks({ email: e.target.value })
            }} />
            <input readOnly={registering} value={password} type="password" className="input-login" placeholder='password'
            onChange={e => {
                setPassword(e.target.value)
                verifyPassword(e.target.value)
                verifyingBlanks({ password: e.target.value })
            }} />
            <input readOnly={registering} value={confirmPassword} type="password" className="input-login"
            placeholder='confirmPassword' onChange={e => {
                setConfirmPassword(e.target.value)
                verifyConfirmPassword(e.target.value)
                verifyingBlanks({ confirmPassword: e.target.value })
            }} />
            <div className="warning">{warnings.name}</div>
            <div className="warning">{warnings.username}</div>
            <div className="warning">{warnings.email}</div>
            <div className="warning">{warnings.password}</div>
            <div className="warning">{warnings.confirmPassword}</div>
            <div className="warning">{warnings.user}</div>
            <button className='button-login' onClick={() => {
                if(status)
                    setRegistering(true)
                    setStatus(false)
                    register()
            }}
            style={{ backgroundColor: status ? '#651fff' : '#a2a2a3' }} >REGISTER</button>
            <h5>Do you already have an account? <button onClick={login} >Login</button></h5>
        </div>
    )
}