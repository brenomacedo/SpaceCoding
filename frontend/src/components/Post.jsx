import React, { Component } from 'react'
import Comments from './Comments'
import './Post.css'

export default class Post extends Component {

    render() {
        return (
            <div className='post-wrapper'>
                <div className='post' >
                    <div className='author'>
                        <div className='author-image'></div>
                        <div className='author-name'><h3>{this.props.author}</h3></div>
                    </div>
                    <div className='description'>
                        {this.props.description}
                    </div>
                    <div className='image' style={{ backgroundImage: `url(${this.props.image})` }}>

                    </div>
                    <Comments userLogged={this.props.userLogged} postId={this.props.id} />
                </div>
            </div>
        )
    }
}