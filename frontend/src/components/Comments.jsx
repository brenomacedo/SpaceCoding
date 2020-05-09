import React from 'react'
import './Comments.css'
import Comment from './Comment'


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

export default props => (
    <div className="comments-wrapper">
        <h4>Comentários: </h4>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        
    </div>
)