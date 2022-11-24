import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoTasks from "./TodoTasks";

const Addtodo = () => {
	// getting the saved todos from local storage
	const getLoacalItems = () => {
		let list = localStorage.getItem("items");
		if (list) {
			return JSON.parse(localStorage.getItem("items"));
		} else {
			return [];
		}
	};

	// defining the states
	const [input, setInput] = useState("");
	const [list, setList] = useState(getLoacalItems());
	const [edit, setEdit] = useState(null);
	const [toggle, setToggle] = useState(true);

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

	// loading the saved todo's on 1st rendering the application
	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(list));
	}, [list]);

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
					/>
					{toggle ? (
						<i className="fa fa-plus addBtn btns " title="Add items" onClick={() => addTask()}></i>
					) : (
						<i className="fa fa-edit addBtn btns " title="Edit items" onClick={() => addTask()}></i>
					)}
				</form>
				<TodoTasks
					list={list}
					setEdit={setEdit}
					setToggle={setToggle}
					setInput={setInput}
					setList={setList}
				/>
			</div>
		</>
	);
};

export default Addtodo;
