import React from 'react'
import './Login.css'
import LoginForm from '../components/LoginForm'
import axios from 'axios'

export default class Login extends React.Component{

    componentDidMount = async () => {
        if(localStorage.getItem('token')) {
            axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
            
            const token = await axios.get('/token')
            
            const user = await axios.get(`/tokenUser?id=${token.data}`)
            if(user.data) {
                this.props.history.push('/profile', { user: user.data })
            }
        }
    }

    render() {
        return (
            <div className="login-wrapper">
                <LoginForm />
            </div>
        )
    }
}