import { useState } from "react";

const Location = ({ initialLocation, locationCallBack }) => {
	const [location, setLocation] = useState(initialLocation);
	return (
		<div className="location">
			<label htmlFor="street">Street</label>
			<input
				type="text"
				name="street"
				id="street"
				className="formInputStyleLocation"
				value={location.street}
				onChange={(e) => setLocation({ ...location, street: e.target.value })}
				onBlur={() => locationCallBack(location)}
			/>

			<label htmlFor="number">Number</label>
			<input
				type="text"
				name="number"
				id="number"
				className="formInputStyleLocation"
				value={location.number}
				onChange={(e) => setLocation({ ...location, number: e.target.value })}
				onBlur={() => locationCallBack(location)}
			/>

			<label htmlFor="zip">Zip</label>
			<input
				type="text"
				name="zip"
				id="zip"
				className="formInputStyleLocation"
				value={location.zip}
				onChange={(e) => setLocation({ ...location, zip: e.target.value })}
				onBlur={() => locationCallBack(location)}
			/>

			<label htmlFor="city">City</label>
			<input
				type="text"
				name="city"
				id="city"
				className="formInputStyleLocation"
				value={location.city}
				onChange={(e) => setLocation({ ...location, city: e.target.value })}
				onBlur={() => locationCallBack(location)}
			/>

			<label htmlFor="country">Country</label>
			<input
				type="text"
				name="country"
				id="country"
				className="formInputStyleLocation"
				value={location.country}
				onChange={(e) => setLocation({ ...location, country: e.target.value })}
				onBlur={() => locationCallBack(location)}
			/>
		</div>
	);
};

export default Location;
