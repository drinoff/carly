import { useNavigate } from "react-router-dom";
import "./TechnicalData.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../../../features/auth/authSlice";

const TechnicalData = ({ classified }) => {
	const navigate = useNavigate();
	const user = useSelector(userSelector);
	const techData = classified.techData;
	const handleMessageClickIcon = () => {
		const userId = user._id;
		const classifiedTitle = classified.title;

		navigate("sendMessage", { userId, classifiedTitle });
	};

	return (
		<div className="TechnicalData-container">
			<h2>{classified.title}</h2>
			<div className="TechnicalData-Price">
				<p>{classified.price} €</p>
			</div>
			<p className="contactWrapper">Contact: {classified.contact}</p>
			<img
				className="messagesIcon"
				src="/images/message.svg"
				alt="messageIcon"
				onClick={handleMessageClickIcon}
			/>
			<div>
				<span>
					HP: <span>{techData.hp}</span>
				</span>
				<span>
					Engine: <span>{techData.engine}</span>
				</span>
				<span>
					Drive: <span>{techData.drive}</span>
				</span>
			</div>
			<div>
				<span>
					Transmission: <span>{techData.transmission}</span>
				</span>
				<span>
					Fuel: <span>{techData.fuel}</span>
				</span>
				<span>
					Milleage: <span>{techData.milleage}</span>
				</span>
			</div>
			<div>
				<span>
					Doors: <span>{techData.doors}</span>
				</span>
				<span>
					Consumption: <span>{techData.consumption}</span>
				</span>
				<span>
					Color: <span>{techData.color}</span>
				</span>
			</div>
			<div>
				<span>
					Year: <span>{techData.year}</span>
				</span>
				<span>
					Interior: <span>{techData.interior}</span>
				</span>
				<span>
					EURO Class: <span>{techData.euroClass}</span>
				</span>
			</div>
			<div>
				<span className="TechnicalData-category">
					Category: <span>{classified.category}</span>
				</span>
				<span className="TechnicalData-location">
					Location:{" "}
					<span>
						{classified.location.street} {classified.location.number}, {classified.location.zip},
						{classified.location.city}, {classified.location.country}
					</span>
				</span>
			</div>
		</div>
	);
};

export default TechnicalData;
