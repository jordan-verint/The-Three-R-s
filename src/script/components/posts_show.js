import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPost, deletePost } from '../redux/actions';

class PostsShow extends Component{
    componentDidMount(){
        if (!this.props.post){
            this.props.fetchPost(this.props.match.params.id);
        }
    }

    onDeleteClick(){
        this.props.deletePost(this.props.match.params.id, () => {
            this.props.history.push('/');
        });
    }
    
    render(){
        const { post } = this.props;

        if (!post){
            return(
                <div>...Loading</div>
            );
        }
        
        return(
            <div className="container">
                <Link to="/" >Back to Index</Link>

                <button
                    className="btn btn-danger"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button> 
                
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    return { post: posts[ownProps.match.params.id] };
}

export default connect( mapStateToProps, { fetchPost, deletePost })(PostsShow);