import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    
    render() {

        console.log(this.props);
        
        const post = this.props.post ? (
            <div className="center">
                <h1 className="center blue-text">blog</h1>
                <h4>{ this.props.post.title }</h4>
                <p>{ this.props.post.body }</p>
                <button className='btn grey' onClick={this.handleClick}>delete post</button>
            </div>
        ) : (
            <div className="center">
                <p>Loading post...</p>
            </div>
        )

        return (
            <div className="container center">
                <div>{ post }</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)