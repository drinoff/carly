import { useNavigate } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
	const navigate = useNavigate();
	const onBackButtonClickHandler = () => {
		navigate("/");
	};
	return (
		<div className="NotFound-Container">
			<img src="/images/notFound.png" alt="404" />
			<h4>The Page you are looking for is not here</h4>
			<p>
				You either tried some <span id="shady">SHADY</span> route, you came here by mistake or the{" "}
				<span id="force">FORCE</span> within you is not <span id="strong">STRONG</span> enough. Whichever it is,
				try using the <span id="navigation">NAVIGATION</span>.
			</p>
			<button onClick={onBackButtonClickHandler} className="glow-on-hover">
				Back to Home
			</button>
		</div>
	);
};
export default NotFound;
