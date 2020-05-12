import React from 'react'
import './Comment.css'

export default props => (
    <div className="comment-wrapper">
        <div className="comment-author">
            <div className="comment-author-image"></div>
            <div className="comment-author-name">{props.author}</div>
        </div>
        <div className="comment">
            <h4>{props.comment}</h4>
        </div>
    </div>
)