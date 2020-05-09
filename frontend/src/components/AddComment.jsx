import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './AddComment.css'

export default props => (
    <div className="add-comment">
        <textarea></textarea>
        <button>
            <h4>ADICIONAR COMENTÁRIO</h4>
            <FaArrowRight color='white' size={18} />
        </button>
    </div>
)