import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Post extends Component {
    render() {
        let post = this.props.post;

        const postStyle = {
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px'
        }

        return (
            <div style={postStyle}>
              <h3><Link to={`/posts/${post.id}`}>{ post.title }</Link></h3>
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}
