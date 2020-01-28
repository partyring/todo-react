import React, { Component } from 'react';
import Todos from './Todos';
import AddToList from './AddToList';


class App extends Component {
  // Define some initial todos
  state = {
    todos: [
      {id: 1, content: 'drink cup of tea'},
      {id: 2, content: 'finish book'},
      {id: 3, content: 'play chess'}    ]
  }

  deleteTodo = (id) => {
    // Filter out the ids that are not the ids to be deleted
    // Seems inefficient??? Or is that just a react thing??
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  addTodo = (todo) => {
    // Generate a random number to serve as an ID for now
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }


  render() {
    return (

      <div className="todo-app container">
      
        <h1 className="center blue-text">todo::today</h1>
        <br/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <br/>
        <AddToList addTodo={this.addTodo} />

      </div>

    );
  }
}
export default App;