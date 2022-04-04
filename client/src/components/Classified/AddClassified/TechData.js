import { useState } from "react";

const TechData = ({ techData, techDataCallback }) => {
	const [techDataState, setTechDataState] = useState(techData);

	return (
		<>
			<div className="pictureContainer techData">
				<label htmlFor="year">Year</label>
				<input
					id="year"
					type="text"
					name="year"
					className="formInputStyle"
					value={techDataState?.year}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							year: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="milleage">Milleage</label>
				<input
					id="milleage"
					type="text"
					name="milleage"
					className="formInputStyle"
					value={techDataState?.milleage}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							milleage: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="engine">Engine</label>
				<input
					id="engine"
					type="text"
					name="engine"
					className="formInputStyle"
					value={techDataState?.engine}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							engine: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="transmission">Transmission</label>
				<input
					id="transmission"
					type="text"
					name="transmission"
					className="formInputStyle"
					value={techDataState?.transmission}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							transmission: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="color">Color</label>
				<input
					id="color"
					type="text"
					name="color"
					className="formInputStyle"
					value={techDataState?.color}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							color: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="doors">Doors</label>
				<input
					id="doors"
					type="text"
					name="doors"
					className="formInputStyle"
					value={techDataState?.doors}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							doors: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="fuel">Fuel</label>
				<input
					id="fuel"
					type="text"
					name="fuel"
					className="formInputStyle"
					value={techDataState?.fuel}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							fuel: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="drive">Drive</label>
				<input
					id="drive"
					type="text"
					name="drive"
					className="formInputStyle"
					value={techDataState?.drive}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							drive: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>

			<div className="pictureContainer techData">
				<label htmlFor="interior">Interior</label>
				<input
					id="interior"
					type="text"
					name="interior"
					className="formInputStyle"
					value={techDataState?.interior}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							interior: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="colohpr">HP</label>
				<input
					id="hp"
					type="text"
					name="hp"
					className="formInputStyle"
					value={techDataState?.hp}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							hp: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="consumption">Consumption</label>
				<input
					id="consumption"
					type="text"
					name="consumption"
					className="formInputStyle"
					value={techDataState?.consumption}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							consumption: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
			<div className="pictureContainer techData">
				<label htmlFor="euroClass">EURO Class</label>
				<input
					id="euroClass"
					type="text"
					name="euroClass"
					className="formInputStyle"
					value={techDataState?.euroClass}
					onChange={(e) => {
						setTechDataState({
							...techDataState,
							euroClass: e.target.value,
						});
					}}
					onBlur={() => techDataCallback(techDataState)}
				/>
			</div>
		</>
	);
};

export default TechData;
