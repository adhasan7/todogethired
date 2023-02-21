import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import useTodoContext from "../../hooks/useTodoContext";
import TodoForm from "../../components/TodoForm";
import PageNotFound from "../PageNotFound";

function OpenTodo() {
	const { id } = useParams();
	const { todos, dispatch } = useTodoContext();
	const [openedTodo, setOpenedTodo] = useState({});
	const handleSave = (data) => {
		const date = new Date();
		dispatch({
			type: "UPDATE_TODOS",
			payload: {
				id: parseInt(id),
				data: {
					id: parseInt(id),
					title: data.title,
					description: data.description,
					date: `${date.getDate()}/${
						date.getMonth() + 1
					}/${date.getFullYear()}`,
				},
			},
		});
	};

	useEffect(() => {
		const selectedTodo = todos.filter((todo) => todo.id === parseInt(id))[0];
		setOpenedTodo(() => selectedTodo);
	}, [todos]);

	return (
		<Container sx={{ mt: 1 }}>
			{openedTodo ? (
				<TodoForm submitCallback={handleSave} data={openedTodo} />
			) : (
				<PageNotFound />
			)}
		</Container>
	);
}

export default OpenTodo;
