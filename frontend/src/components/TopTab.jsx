import React from 'react'
import './TopTab.css'
import { useHistory } from 'react-router-dom'

export default props => {

    const user = props.user
    const history = useHistory()

    return (
        <div className="top-tab">
            <div className="menu">
                <h4 onClick={() => {
                    localStorage.clear()
                    history.push('/')
                }}>Logout</h4>
            </div>
            <div className="info">
                <div style={{
                    backgroundImage: `url(${user.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}></div>
                <h4>{user.name}</h4>
            </div>
        </div>
    )
}