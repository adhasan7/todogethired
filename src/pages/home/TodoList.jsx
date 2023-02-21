import { useNavigate } from "react-router-dom";
import { DeleteRounded } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import useTodoContext from "../../hooks/useTodoContext";

function TodoList() {
	const navigate = useNavigate();
	const { todos, dispatch } = useTodoContext();

	const handleTodoClick = (id) => {
		navigate(`/open/${id}`);
	};
	const handleTodoDelete = (id) => {
		dispatch({
			type: "DELETE_TODO",
			payload: { id },
		});
	};

	return (
		<List sx={{ width: "100%" }}>
			{todos &&
				todos.map((todo) => (
					<Box key={todo.id}>
						<ListItem
							alignItems="flex-start"
							sx={{
								cursor: "pointer",
								":hover": {
									bgcolor: "#EEEEEE",
								},
							}}
							onClick={() => handleTodoClick(todo.id)}
						>
							<ListItemAvatar
								onClick={(e) => {
									e.stopPropagation();
									handleTodoDelete(todo.id);
								}}
							>
								<Avatar sx={{ bgcolor: "red" }}>
									<DeleteRounded />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={todo.title}
								secondary={
									<>
										<Typography
											sx={{ display: "block" }}
											component="span"
											variant="caption"
											color="text.secondary"
										>
											{todo.date ? todo.date : "not specified"}
										</Typography>
										<Typography
											sx={{ width: "100%", display: "block" }}
											component="span"
											variant="body2"
											noWrap={true}
										>
											{todo.description}
										</Typography>
									</>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
					</Box>
				))}
		</List>
	);
}

export default TodoList;
