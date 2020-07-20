import React from "react";

class App extends React.Component {
	state = {
		todos: [],
		input: "",
	};

	handleSubmit = e => {
		// prevent page from reloading
		e.preventDefault();
		// add new todo to state
		this.setState({ todos: this.state.todos.concat(this.state.input) });
		// reset input field
		this.setState({ input: "" });
	};

	handleChange = e => {
		this.setState({ input: e.target.value });
	};

	render() {
		return (
			<div className="App">
				<h1>Yet another Todo App</h1>
				<ul>
					{this.state.todos.map(function renderTodos(todo, i) {
						return (
							<li key={i} className="todo-item">
								{todo}
							</li>
						);
					})}
				</ul>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="what needs to get done?"
						autoFocus
						value={this.state.input}
						onChange={this.handleChange}
					></input>
				</form>
			</div>
		);
	}
}

export default App;
