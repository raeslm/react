import React, { Component } from 'react';

export default class SinglePost extends Component {
    state = {
        post: []
    }
    
    async componentDidMount() {
        const { match } = this.props
        let { postId } = match.params;

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await res.json();
        this.setState({ post: data });
    }

    render() {
        let post = this.state.post;

        return (
            <div>
                <h1 style={{ color: 'green' }}>{ post.title }</h1>
                <p>{ post.body }</p>
                <p>Creado por usuario: { post.userId }</p>
            </div>
        );
    }
}
