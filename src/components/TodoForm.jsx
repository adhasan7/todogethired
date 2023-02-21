import { useState, useEffect } from "react";
import { Typography, TextField, Button, Alert } from "@mui/material";

function TodoForm({ submitCallback, data }) {
	const [titleValue, setTitleValue] = useState("");
	const [descriptionValue, setDescriptionValue] = useState("");
	const [isError, setIsError] = useState(false);

	const handleTitleOnChange = (title) => setTitleValue(title);
	const handleDescriptionOnChange = (description) =>
		setDescriptionValue(description);

	const validate = (title, desc) => title && desc;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate(titleValue, descriptionValue)) {
			submitCallback({ title: titleValue, description: descriptionValue });
		} else {
			setIsError(true);
		}
	};
	useEffect(() => {
		if (data) {
			setTitleValue(data.title);
			setDescriptionValue(data.description);
		}
	}, [data]);

	return (
		<form className="flex-vertical" onSubmit={handleSubmit}>
			<Typography variant="h4" component="label" htmlFor="title">
				Title
			</Typography>
			<TextField
				id="title"
				variant="outlined"
				sx={{ mb: 1 }}
				value={titleValue || ""}
				onChange={(e) => handleTitleOnChange(e.target.value)}
			/>

			<Typography variant="h4" component="label" htmlFor="description">
				Description
			</Typography>
			<TextField
				id="description"
				variant="outlined"
				sx={{
					mb: 1,
				}}
				rows={8}
				multiline
				value={descriptionValue || ""}
				onChange={(e) => handleDescriptionOnChange(e.target.value)}
			/>
			{isError && <Alert severity="error">All input are required!</Alert>}
			<Button
				variant="contained"
				type="submit"
				sx={{ py: 1, display: "block" }}
				disableElevation
			>
				{data ? "save changes" : "save"}
			</Button>
		</form>
	);
}

export default TodoForm;
