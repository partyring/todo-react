import React from 'react';

const Todos = ({todos, deleteTodo}) => {
	
	// If the amount of todos is not zero
	const todoList = todos.length ? (
		// Map/return each todo??? Need more info here
		todos.map(todo => {
		  return (
			<div className="collection-item" key={todo.id}>
			  <span onClick={() => {deleteTodo(todo.id)}}>
			  	{todo.content}
			  </span>
			</div>
		  )
		})
	  ) : (
		// Else, nothing in the todo list
		<p className="center">You have nothing to do, how wonderful.</p>
	)
	return (
		<div className="todos collection">
			{todoList}
		</div>
	)
}

export default Todos