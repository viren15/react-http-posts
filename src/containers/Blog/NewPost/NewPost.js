import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {
        state = {
                title: '',
                content: '',
                author: 'Max',
                submitted: false
        }; 

        componentDidMount() {
                // if unauth => this.props.history.replace('/posts/'); guard
                console.log(this.props);
        }

        postDataHandler = () => {
                const data = {
                title: this.state.title,
                body: this.state.content,
                author: this.state.author
                }
                axios.post('/posts', data)
                .then(response => {
                        console.log(response);
                        this.props.history.push('/posts/'); // push will push page on top of stack of pages so we can go back 
                        // this.props.history.replace('/posts/'); same like redirect
                        // this.setState({submitted: true});
                });
        } 

        render() {
                const redirect = this.state.submitted ? <Redirect to="/posts" /> : null; //redirects replcaes the page

                return (
                        <div className="NewPost">
                                {redirect}
                                <h1>Add a Post</h1>
                                <label>Title</label>
                                        <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                                <label>Content</label>
                                        <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                                <label>Author</label>
                                        <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                                        <option value="Max">Max</option>
                                        <option value="Manu">Manu</option>
                                        </select>
                                <button onClick={this.postDataHandler}>Add Post</button>
                        </div>
                );
        }
}

export default NewPost;