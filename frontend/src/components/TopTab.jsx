import React from 'react'
import './TopTab.css'

export default props => (
    <div className="top-tab">
        <div className="menu">
            <h4>Profile</h4>
            <h4>About</h4>
            <h4>Logout</h4>
        </div>
        <div className="info">
            <div>PIC</div>
            <h4>Breno Macêdo</h4>
        </div>
    </div>
)