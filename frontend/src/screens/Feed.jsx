import React from 'react'
import Header from '../components/Header'
import TopTab from '../components/TopTab'
import AddPost from '../components/AddPost'
import Posts from '../components/Posts'
import './Feed.css'

export default props => (
    <div className="wrapper">
        <div className="scroll">
            <Header />
            <TopTab />
            <AddPost />
            <Posts />
        </div>
    </div>
)