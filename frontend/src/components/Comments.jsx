import React from 'react'
import './Comments.css'
import Comment from './Comment'
import AddComment from './AddComment'
import axios from 'axios'

const initial_state = {
    posts: [
        {
            description: 'Preciso de Ajuda com isso!',
            image: 'https://i.imgur.com/83smU7B.jpg',
            author: 'Breno Macêdo',
            comments: [
                {
                    author: 'Pedro',
                    comment: 'Legal!'
                }, {
                    author: 'Joao',
                    comment: 'Massa!'
                }
            ]
        }
    ]
}

export default class Comments extends React.Component{

    state = {
        comments: []
    }

    componentDidMount = async () => {
        const comments = await axios.get('/comment')
        this.setState({
            comments: comments.data
        })
    }

    renderComments = () => {
        const list = this.state.comments.filter(item => item.postId === this.props.postId)
        return list.map(item => (
            <Comment {...item} />
        ))
    }

    render() {
        return (
            <div className="comments-wrapper">
                <h4>Comentários: </h4>
                {this.renderComments()}
                <AddComment />
            </div>
        )
    }
}