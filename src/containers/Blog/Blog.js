import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
        return import('./NewPost/NewPost');
});

class Blog extends Component {
        state = {
                auth: true
        }

        render() {
                return (
                        <div className="Blog">
                                <header >
                                        <nav>
                                                <ul>
                                                        <li><NavLink
                                                                to='/posts/'
                                                                exact
                                                                activeClassName="my-active"
                                                                activeStyle={{
                                                                        color: '#fa932f',
                                                                        // textDecoration: 'underline'
                                                                }}>Posts</NavLink></li>
                                                        <li><NavLink to={{
                                                                pathname: '/new-post', // otherwise it will generate absolute path this.props.match.url
                                                                hash: '#submit',
                                                                search: '?quick-submit=true'
                                                        }}>New Post</NavLink></li>
                                                </ul>
                                        </nav>
                                </header>
                                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                                
                                <Switch>
                                        {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                                        <Route path="/posts" component={Posts} />
                                        {/* <Route render={() => <h1 style={{textAlign:'center'}}>Not Found</h1>}/> */}
                                        <Redirect from="/" to="/posts" />
                                        {/* <Route path="/" component={Posts} /> */}
                                </Switch>
                        </div>
                );
        }
}

export default Blog;