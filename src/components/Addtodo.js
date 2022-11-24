import React from "react";
import { v4 as uuidv4 } from "uuid";

const Addtodo = ({ list, setList, input, setInput, edit, toggle, setToggle }) => {
	// handling changes made in input field
	const handleChange = (e) => setInput(e.target.value);

	// handling submit
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	// adding the tasks in the task list
	const addTask = () => {
		if (!input) {
			alert("Please enter some todos");
		} else if (input !== "" && !toggle) {
			setList(
				list.map((ele) => {
					if (ele.id === edit) {
						return { ...ele, title: input };
					}
					return ele;
				})
			);
			setToggle(true);
		} else {
			setList((list) => [...list, { id: uuidv4(), title: input, completed: false }]);
		}
		setInput("");
	};

	return (
		<>
			<div className="todolist">
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						type="text"
						id="add"
						placeholder="Add Todo..."
						value={input}
						onChange={(e) => handleChange(e)}
						ref={(input) => input?.focus?.()}
						autoComplete="off"
					/>
					{toggle ? (
						<i className="fa fa-plus addBtn btns " title="Add items" onClick={() => addTask()}></i>
					) : (
						<i className="fa fa-edit addBtn btns " title="Edit items" onClick={() => addTask()}></i>
					)}
				</form>
			</div>
		</>
	);
};

export default Addtodo;
