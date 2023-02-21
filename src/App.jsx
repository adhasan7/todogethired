// roboto fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// mui themes
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

// context
import { TodoProvider } from "./contexts/TodoContext";

// components
import Navbar from "./components/Navbar";
import RoutesHandler from "./RoutesHandler";

const AppTheme = createTheme();

function App() {
	return (
		<ThemeProvider theme={AppTheme}>
			<CssBaseline />
			<BrowserRouter>
				<TodoProvider>
					<Navbar />
					<RoutesHandler />
				</TodoProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
