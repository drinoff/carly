import ContactForm from "./ContactForm";
import ContactDescription from "./ContactDescription";

import "./Contact.css";

const Contact = ({ onError }) => {
	return (
		<div className="contact">
			<div className="contactDescription">
				<ContactDescription />
			</div>
			<div className="contactForm">
				<ContactForm onError={onError} />
			</div>
		</div>
	);
};

export default Contact;
