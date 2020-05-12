import React from 'react'
import Post from './Post'
import axios from 'axios'

export default class Posts extends React.Component{

    state = {
        posts: []
    }

    componentDidMount = async () => {
        const posts = await axios.get('http://localhost:3003/posts')
        this.setState({
            posts: posts.data
        })
    }

    renderRows = () => {
        const list = this.state.posts
        console.log(list)
        return list.map((item, index) => (
            <Post {...item} key={index} />
        ))
    }

    render() {
        return (
            <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                {this.renderRows()}
            </div>
        )
    }
}