import React from "react";

const TodoTasks = (props) => {
	console.log(props.todo);
	const deleteTask = (id) => {
		return props.todo.filter((ele, index) => index !== id);
	};
	return (
		<div>
			{props.todo.map((todo, index) => {
				return (
					<div key={index} className="tasks">
						<div>{todo}</div>
						<button type="button" onClick={() => deleteTask(index)}>
							x
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default TodoTasks;
