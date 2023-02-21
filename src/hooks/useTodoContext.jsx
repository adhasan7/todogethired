import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function useTodoContext() {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error("Cannot use useTodoContext outside TodoProvider!");
	}
	return context;
}

export default useTodoContext;
