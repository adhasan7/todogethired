import { Container } from "@mui/material";

function PageNotFound() {
	return (
		<Container sx={{ mt: 1 }}>
			<img alt="page-not-found.jpg" src="/404.jpg" style={{ width: "100%" }} />
		</Container>
	);
}

export default PageNotFound;
