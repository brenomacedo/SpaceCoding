import React from 'react'
import Post from './Post'
import axios from 'axios'
import { FaCamera } from 'react-icons/fa'
import './AddPost.css'

export default class Posts extends React.Component{

    state = {
        posts: [],
        description: '',
        image: '',
        imagePath: ''
    }

    componentDidMount = async () => {
        const posts = await axios.get('posts')
        this.setState({
            posts: posts.data
        })
    }

    submitPost = () => {
        axios.post('https://us-central1-spacecoding-16607.cloudfunctions.net/uploadPostImage', {
            image: this.state.image
        }).then(resp => {

            const post = {
                author: this.props.user.name,
                description: this.state.description,
                image: resp.data.imageUrl,
                userId: this.props.user.id
            }

            axios.post('/posts', post)
                .then(res => {
                    this.setState({
                        posts: this.state.posts.concat(post)
                    })
                })
                .catch(err => {
                    axios
                    .post('https://us-central1-spacecoding-16607.cloudfunctions.net/deleteImage' , {
                        filename: resp.data.destination
                    })
                })
        })
        .catch(err => console.log(err))
    }

    renderRows = () => {
        const list = this.state.posts.reverse()
        return list.map((item, index) => (
            <Post {...item} key={index} />
        ))
    }

    selectPhoto = (value, files) => {
        if(!files){
            return false
        }

        if(files.type !== 'image/jpeg' && files.type !== 'image/png') {
            this.setState({
                imagePath: 'FORMATO DE IMAGEM INVALIDO'
            })
            return false
        }

        this.setState({
            imagePath: value.split('\\').reverse()[0]
        })


        let reader = new FileReader()
        reader.readAsDataURL(files)
        reader.onload = () => {
            this.setState({
                image: reader.result.split(',')[1]
            })
        }
        reader.onerror = () => {
            console.log('ocorreu um erro inesperado!')
        }
    }

    render() {
        return (
            <>
                <div className="add-post-wrapper">
                <div className="add-post">
                    <div className="add-post-header">
                        <h3>Add a doubt or a publicity!</h3>
                        <h3>{this.state.imagePath}</h3>
                        <label htmlFor='input'>
                            <FaCamera style={{ marginRight: 5, cursor: 'pointer' }} size={20} color='white' />
                        </label>
                        <input type='file' onChange={e => this.selectPhoto(e.target.value, e.target.files[0])}
                        style={{ display: 'none' }} id='input' />
                    </div>
                    <textarea value={this.state.description}
                    onChange={e => this.setState({ description: e.target.value })}></textarea>
                    <button onClick={this.submitPost}><h3>SUBMIT</h3></button>
                </div>
                </div>
                <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                    {this.renderRows()}
                </div>
            </>
        )
    }
}