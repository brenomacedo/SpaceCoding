import React from 'react'
import './TopTab.css'
import axios from 'axios'

export default props => {

    const user = props.user

    return (
        <div className="top-tab">
            <div className="menu">
                <h4 onClick={async () => {
                    const i = await axios.get('/test')
                    alert(i.data.deu)
                }}>Profile</h4>
                <h4>About</h4>
                <h4>Logout</h4>
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