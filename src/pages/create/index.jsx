import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import useTodoContext from "../../hooks/useTodoContext";
import TodoForm from "../../components/TodoForm";

function CreateTodo() {
	const navigate = useNavigate();
	const { todos, dispatch } = useTodoContext();

	const handleSubmit = (data) => {
		const date = new Date();
		dispatch({
			type: "CREATE_TODOS",
			payload: {
				id: todos.length > 0 ? todos[0].id + 1 : 1,
				title: data.title,
				description: data.description,
				date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
			},
		});
		navigate("/");
	};

	return (
		<Container>
			<TodoForm submitCallback={handleSubmit} />
		</Container>
	);
}

export default CreateTodo;
