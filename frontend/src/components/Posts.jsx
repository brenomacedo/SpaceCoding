import React from 'react'
import Post from './Post'
import axios from 'axios'


export default class Posts extends React.Component{

    state = {
        posts: []
    }

    componentDidMount = async () => {
        const posts = await axios.get('posts')
        this.setState({
            posts: posts.data
        })
    }

    renderRows = () => {
        const list = this.state.posts
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