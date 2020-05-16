import React from 'react'
import './Comments.css'
import Comment from './Comment'
import axios from 'axios'
import { FaArrowRight } from 'react-icons/fa'
import './AddComment.css'



export default class Comments extends React.Component{

    state = {
        comments: [],
        comment: ''
    }

    componentDidMount = async () => {
        const comments = await axios.get('/comment')
        this.setState({
            comments: comments.data
        })
    }

    addComment = () => {

        const comment = {
            author: this.props.userLogged.author,
            userId: this.props.userLogged.id,
            comment: this.state.comment,
            postId: this.props.postId
        }

        axios.post('/comment', comment).then(resp => {
            this.setState({
                comments: this.state.comments.concat(comment),
                comment: ''
            })
        }).catch(err => console.log(err))
    }

    renderComments = () => {
        const list = this.state.comments.filter(item => item.postId === this.props.postId)
        return list.map((item, index) => (
            <Comment {...item} key={index} />
        ))
    }

    render() {
        return (
            <div className="comments-wrapper">
                <h4>Comentários: </h4>
                {this.renderComments()}
                <div className="add-comment">
                    <textarea value={this.state.comment}
                    onChange={e => this.setState({ comment: e.target.value })}></textarea>
                    <button onClick={this.addComment}>
                        <h4>ADICIONAR COMENTÁRIO</h4>
                        <FaArrowRight color='white' size={18} />
                    </button>
                </div>
            </div>
        )
    }
}