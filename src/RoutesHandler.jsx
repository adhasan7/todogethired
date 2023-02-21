import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CreateTodo from "./pages/create";
import OpenTodo from "./pages/open";
import PageNotFound from "./pages/PageNotFound";

const routes = [
	{
		path: "/",
		title: "Home",
		elem: <Home />,
	},
	{
		path: "/create",
		title: "Create",
		elem: <CreateTodo />,
	},
	{
		path: "/open/:id",
		title: "Open",
		elem: <OpenTodo />,
	},
	{
		path: "*",
		title: "Page Not Found",
		elem: <PageNotFound />,
	},
];

function RoutesHandler() {
	return (
		<Box
			sx={{
				m: "1rem auto",
				maxWidth: {
					xs: "100%",
					md: "400px",
				},
			}}
		>
			<Routes>
				{routes.map((route) => (
					<Route key={route.title} path={route.path} element={route.elem} />
				))}
			</Routes>
		</Box>
	);
}

export default RoutesHandler;
