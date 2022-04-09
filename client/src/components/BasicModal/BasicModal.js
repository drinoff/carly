import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function BasicModal({ openModal, error }) {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState("");

	useEffect(() => {
		if (openModal) {
			setOpen(true);
		}

		setContent(error);
	}, [openModal]);

	if (open) {
		setTimeout(() => {
			setOpen(false);
		}, 5000);
	}
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "#111827",
						border: `2px solid #000`,
						color: Array.isArray(content) ? "#B90002" : "#75FAC8",
						textAlign: "center",
						boxShadow: 24,
						p: 4,
					}}
				>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{Array.isArray(content) ? content[0] : content}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
