import React from 'react'
import Header from '../components/Header'
import TopTab from '../components/TopTab'
import AddPost from '../components/AddPost'
import './Feed.css'

export default props => (
    <div className="wrapper">
        <Header />
        <TopTab />
        <AddPost />
    </div>
)