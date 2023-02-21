import { ArrowBack } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Box, Typography } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
	const location = useLocation();

	return (
		<AppBar
			position="sticky"
			elevation={0}
			sx={{
				alignItems: "center",
			}}
		>
			<Toolbar
				variant="dense"
				sx={{
					width: "100%",
					maxWidth: {
						xs: "100%",
						md: "400px",
					},
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
					}}
				>
					{location.pathname !== "/" && (
						<IconButton
							LinkComponent={Link}
							to="/"
							sx={{
								mr: 1,
								color: "white",
							}}
						>
							<ArrowBack />
						</IconButton>
					)}
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						TODO
					</Typography>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
