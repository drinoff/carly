import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import { EXTRAS } from "../../../constants";

const ExtrasCheckboxes = ({ extrasCallBack }) => {
	const [checked, setChecked] = useState([]);
	return (
		<>
			{EXTRAS.map((extra) => (
				<FormControlLabel
					key={extra}
					control={
						<Checkbox
							sx={{
								color: pink[800],
								"&.Mui-checked": {
									color: pink[600],
								},
							}}
							checked={checked.indexOf(extra) !== -1}
							onChange={(event) => {
								const newChecked = [...checked];
								if (event.target.checked) {
									newChecked.push(extra);
								} else {
									newChecked.splice(newChecked.indexOf(extra), 1);
								}
								setChecked(newChecked);
								extrasCallBack(newChecked);
							}}
						/>
					}
					label={extra}
				/>
			))}
		</>
	);
};

export default ExtrasCheckboxes;
