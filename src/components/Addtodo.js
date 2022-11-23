import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Addtodo = () => {
	const getLoacalItems = () => {
		let list = localStorage.getItem("items");
		if (list) {
			return JSON.parse(localStorage.getItem("items"));
		} else {
			return [];
		}
	};
	const [input, setInput] = useState("");
	const [list, setList] = useState(getLoacalItems());
	const [edit, setEdit] = useState(null);
	const [toggle, setToggle] = useState(true);

	const handleChange = (e) => setInput(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input !== "" && !toggle) {
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

	const deleteTask = (id) => setList((oldlist) => oldlist.filter((todo) => todo.id !== id));

	const updateTask = (id) => {
		const findTodo = list.find((todo) => todo.id === id);
		console.log(findTodo);
		setInput(findTodo.title);
		setEdit(findTodo.id);
		setToggle(false);
	};

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
					/>
					<button type="submit" className="btn">
						Add
					</button>
				</form>
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
											className="fa fa-edit"
											title="Edit items"
											onClick={() => updateTask(todos.id)}
										></i>
										<i
											className="fa fa-solid fa-trash"
											title="Delete items"
											onClick={() => deleteTask(todos.id)}
										></i>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</>
	);
};

export default Addtodo;
