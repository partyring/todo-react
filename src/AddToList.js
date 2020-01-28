import React, { Component } from 'react'

class AddToList extends Component {

    state = {

    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        // Clears the input field
        this.setState({
            content: ''
        })
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>add to your todo::list</label>
                    <input type ="text" onChange={this.handleChange}  value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddToList