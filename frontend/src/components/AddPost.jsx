import React, { useState } from 'react'
import './AddPost.css'

export default props => {

    const [description, setDescription] = useState('')

    return (
        <div className="add-post-wrapper">
            <div className="add-post">
                <h3>Add a doubt or a publicity!</h3>
                <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
        </div>
    )
}