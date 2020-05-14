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
    const [name, setName] = useState('')
    const history = useHistory()

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
        }).then(resp => {

            const user = {
                name,
                username,
                email,
                password,
                image: resp.data.imageUrl
            }

            axios.post('/user', user)
                .then(res => {
                    axios.defaults.headers.common['authorization'] = res.data.token
                    localStorage.setItem('token', `Bearer ${res.data.token}`)
                    history.push('/login')
                })
                .catch(err => {
                    axios
                    .post('https://us-central1-spacecoding-16607.cloudfunctions.net/deleteImage' , {
                        filename: resp.data.destination
                    })
                })
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
            <input value={name} type="text" className="input-login" placeholder='name'
            onChange={e => setName(e.target.value)} />
            <input value={username} type="text" className="input-login" placeholder='username'
            onChange={e => setUsername(e.target.value)} />
            <input value={email} type="email" className="input-login" placeholder='email'
            onChange={e => setEmail(e.target.value)} />
            <input value={password} type="password" className="input-login" placeholder='password'
            onChange={e => setPassword(e.target.value)} />
            <button className='button-login' onClick={register} >REGISTER</button>
            <h5>Do you already have an account? <button onClick={login} >Login</button></h5>
        </div>
    )
}