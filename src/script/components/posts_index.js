import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component{
    constructor(props){
        super(props);
        this.renderPosts = this.renderPosts.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }
    
    render() {
        return(
            <div className="container">
                <div className="button right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);