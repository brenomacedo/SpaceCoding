import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import './AddPost.css'

export default props => {

    const [description, setDescription] = useState('')

    return (
        <div className="add-post-wrapper">
            <div className="add-post">
                <div className="add-post-header">
                    <h3>Add a doubt or a publicity!</h3>
                    <FaCamera style={{ marginRight: 5, cursor: 'pointer' }} size={20} color='white' />
                </div>
                <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
        </div>
    )
}