import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './AddComment.css'

export default props => {

    const [comment, setComment] = useState('')

    return (
        <div className="add-comment">
            <textarea value={comment} onChange={e => setComment(e.target.value)} ></textarea>
            <button>
                <h4>ADICIONAR COMENTÁRIO</h4>
                <FaArrowRight color='white' size={18} />
            </button>
        </div>
    )
}