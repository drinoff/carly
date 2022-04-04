import { useState } from "react";

const Pictures = ({ picturesCallBack, initialPictures }) => {
	const [pictures, setPictures] = useState(initialPictures);
	return (
		<>
			<div className="pictureContainer">
				<label htmlFor="modelPic-a">Image URL</label>
				<input
					id="modelPic-a"
					type="text"
					name="modelPic-a"
					className="formInputStyle"
					value={pictures[0]}
					onChange={(e) => setPictures([e.target.value, pictures[1], pictures[2], pictures[3], pictures[4]])}
					onBlur={() => picturesCallBack(pictures)}
				/>
			</div>
			<div className="pictureContainer">
				<label htmlFor="modelPic-b">Image URL</label>
				<input
					id="modelPic-b"
					type="text"
					name="modelPic-b"
					className="formInputStyle"
					value={pictures[1]}
					onChange={(e) => setPictures([pictures[0], e.target.value, pictures[2], pictures[3], pictures[4]])}
					onBlur={() => picturesCallBack(pictures)}
				/>
			</div>
			<div className="pictureContainer">
				<label htmlFor="modelPic-c">Image URL</label>
				<input
					id="modelPic-c"
					type="text"
					name="modelPic-c"
					className="formInputStyle"
					value={pictures[2]}
					onChange={(e) => setPictures([pictures[0], pictures[1], e.target.value, pictures[3], pictures[4]])}
					onBlur={() => picturesCallBack(pictures)}
				/>
			</div>
			<div className="pictureContainer">
				<label htmlFor="modelPic-d">Image URL</label>
				<input
					id="modelPic-d"
					type="text"
					name="modelPic-d"
					className="formInputStyle"
					value={pictures[3]}
					onChange={(e) => setPictures([pictures[0], pictures[1], pictures[2], e.target.value, pictures[4]])}
					onBlur={() => picturesCallBack(pictures)}
				/>
			</div>
			<div className="pictureContainer">
				<label htmlFor="modelPic">Image URL</label>
				<input
					id="modelPic-e"
					type="text"
					name="modelPic-e"
					className="formInputStyle"
					value={pictures[4]}
					onChange={(e) => setPictures([pictures[0], pictures[1], pictures[2], pictures[3], e.target.value])}
					onBlur={() => picturesCallBack(pictures)}
				/>
			</div>
		</>
	);
};

export default Pictures;
