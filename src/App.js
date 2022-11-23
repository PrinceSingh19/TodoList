import Addtodo from "./components/Addtodo";

function App() {
	return (
		<>
			<div className="header">Todo List App made with ReactJs</div>
			<div className="app">
				<div className="todo">
					<Addtodo />
				</div>
			</div>
		</>
	);
}

export default App;
