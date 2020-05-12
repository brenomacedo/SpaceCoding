import React from 'react'
import './Comment.css'

export default props => (
    <div className="comment-wrapper">
        <div className="comment-author">
            <div className="comment-author-image"></div>
            <div className="comment-author-name">Cleiton Cleitoso</div>
        </div>
        <div className="comment">
            <h4>Muito legal, adorei o post, se possível, faça um vídeo sobre angular js.</h4>
        </div>
    </div>
)