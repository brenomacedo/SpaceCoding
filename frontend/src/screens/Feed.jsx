import React, { useEffect } from 'react'
import Header from '../components/Header'
import TopTab from '../components/TopTab'
import Posts from '../components/Posts'
import { useLocation } from 'react-router-dom'
import './Feed.css'
import axios from 'axios'

export default props => {

    const location = useLocation()
    const user = location.state.user

    useEffect(() => {
        if(localStorage.getItem('token')) {
            axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
        }
    }, [])

    return (
        <div className="wrapper">
            <div className="scroll">
                <Header />
                <TopTab user={user} />
                <Posts user={user} />
            </div>
        </div>
    )
}