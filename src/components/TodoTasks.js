import React from "react";

const TodoTasks = ({ setEdit, setInput, setToggle, list, setList }) => {
	// handling delete task
	const deleteTask = (id) => setList((oldlist) => oldlist.filter((todo) => todo.id !== id));

	// handling the updation of the existing tasks in the tasks list
	const updateTask = (id) => {
		const findTodo = list.find((todo) => todo.id === id);
		setInput(findTodo.title);
		setEdit(findTodo.id);
		setToggle(false);
	};

	return (
		<div>
			{list.length === 0 ? (
				<p>Please enter some todos...</p>
			) : (
				list.map((todos) => {
					return (
						<div key={todos.id} className="tasks">
							<div>{todos.title}</div>
							<div className="btn">
								<i
									className="fa fa-edit btns"
									title="Edit items"
									onClick={() => updateTask(todos.id)}
								></i>
								<i
									className="fa fa-solid fa-trash btns"
									title="Delete items"
									onClick={() => deleteTask(todos.id)}
								></i>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
};

export default TodoTasks;
