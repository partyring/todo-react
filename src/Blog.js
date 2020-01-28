import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Render the 'about' page
class Blog extends Component {
   
    render() {
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={ post.id }>
                        <div className="cart-content">
                            <Link to={'/blog/' + post.id}>
                                <h3>{ post.title }</h3>
                            </Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts Headers.</div>
        );
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">blog</h1>
                <p className="center">This is my blog page!</p>
                { postList }
            </div>
    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Blog)