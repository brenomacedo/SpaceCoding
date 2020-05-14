import React from 'react'
import Header from '../components/Header'
import TopTab from '../components/TopTab'
import Posts from '../components/Posts'
import { useLocation } from 'react-router-dom'
import './Feed.css'

export default props => {

    const location = useLocation()
    const user = location.state.user

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