import { useNavigate } from "react-router-dom";
import emailServices from "../../services/emailServices";
import "./ContactForm.css";

const ContactForm = ({ onError }) => {
	const navigate = useNavigate();

	const onFormSubmitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const email = formData.get("email");
		const name = formData.get("name");
		const message = formData.get("message");

		const body = {
			email,
			name,
			message,
		};
		if (!email || !name || !message) {
		} else {
			emailServices
				.sendEmail(body)
				.then((res) => {
					if (res.error) {
						onError(res.error);
					} else {
						onError(res.message);
					}
				})
				.catch((err) => {
					navigate("/contact");
				});
		}
		navigate("/");
	};
	return (
		<>
			<form className="contactFormStyle" action="POST" onSubmit={onFormSubmitHandler}>
				<div className="name">
					<label htmlFor="name">Name</label>
					<input className="formStyle" id="name" name="name" type="text" />
				</div>
				<div className="email">
					<label htmlFor="email">Email</label>
					<input className="formStyle" id="email" name="email" type="text" />
				</div>
				<div className="message">
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" type="text" />
				</div>
				<input className="contactFormButton" type="submit" value="Let's Talk" />
			</form>
		</>
	);
};

export default ContactForm;
