import React, { Component } from 'react'
import Comments from './Comments'
import './Post.css'

export default class Post extends Component {

    state = {
        posts: [
            {
                description: 'Preciso de Ajuda com isso!',
                image: 'https://i.imgur.com/83smU7B.jpg',
                author: 'Breno Macêdo',
                comments: [
                    {
                        author: 'Pedro',
                        comment: 'Legal!'
                    }, {
                        author: 'Joao',
                        comment: 'Massa!'
                    }
                ]
            }
        ]
    }

    render() {
        return (
            <div className='post-wrapper'>
                <div className='post' >
                    <div className='author'>
                        <div className='author-image'></div>
                        <div className='author-name'><h3>Breno Macêdo</h3></div>
                    </div>
                    <div className='description'>
                        {this.state.posts[0].description}
                    </div>
                    <div className='image' style={{ backgroundImage: `url(${this.state.posts[0].image})` }}>

                    </div>
                    <Comments />
                </div>
            </div>
        )
    }
}