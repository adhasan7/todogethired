import { createContext, useReducer } from "react";

export const TodoContext = createContext([]);

function todoReducer(state, { type, payload }) {
	switch (type) {
		case "SET_TODOS":
			return {
				todos: payload,
			};
		case "CREATE_TODOS":
			return {
				todos: [payload, ...state.todos],
			};
		case "UPDATE_TODOS":
			const updatedTodos = state.todos.map((todo) =>
				todo.id === payload.id ? { ...payload.data } : todo
			);
			return {
				todos: updatedTodos,
			};
		case "DELETE_TODO":
			return {
				todos: state.todos.filter((todo) => todo.id !== payload.id),
			};
		default:
			return state;
	}
}

export function TodoProvider({ children }) {
	const [state, dispatch] = useReducer(todoReducer, { todos: [] });

	return (
		<TodoContext.Provider value={{ ...state, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
}
