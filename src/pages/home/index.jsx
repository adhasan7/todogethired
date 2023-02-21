import { Link } from "react-router-dom";
import { Button, Container, Paper } from "@mui/material";
import Add from "@mui/icons-material/Add";
import TodoList from "./TodoList";

function Home() {
	return (
		<Container
			sx={{
				mt: 1,
			}}
		>
			<Button
				variant="outlined"
				LinkComponent={Link}
				to="/create"
				sx={{
					width: "100%",
					p: "1rem",
					m: {
						xs: "1rem 0",
						md: "1rem auto",
					},
					display: "flex",
					flexDirection: {
						xs: "column",
						md: "row",
					},
					alignItems: "center",
					gap: 1,
				}}
			>
				<Add></Add>
				<span>Create Todo</span>
			</Button>

			<TodoList />
		</Container>
	);
}

export default Home;
