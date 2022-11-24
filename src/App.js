import Addtodo from "./components/Addtodo";
import React, { useEffect, useState } from "react";
import TodoTasks from "./components/TodoTasks";
function App() {
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

	// loading the saved todo's on 1st rendering the application
	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(list));
	}, [list]);

	return (
		<>
			<div className="header">Todo List App made with ReactJs</div>
			<div className="app">
				<div className="todo">
					<Addtodo
						input={input}
						setInput={setInput}
						list={list}
						setList={setList}
						edit={edit}
						setEdit={setEdit}
						toggle={toggle}
						setToggle={setToggle}
					/>
				</div>
				<div className="todos">
					<TodoTasks
						list={list}
						setEdit={setEdit}
						setToggle={setToggle}
						setInput={setInput}
						setList={setList}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
