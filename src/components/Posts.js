import React, { Component } from 'react';

// Components
import Post from './Post'

export default class Posts extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        this.setState({ posts: data });
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => <Post post={ post } key={ post.id }/>)
                }
            </div>
        );
    }
}