import { Box } from "@mui/material";
import "./SearchClassified.css";
const SearchClassified = ({ filterHandler, filter, sortHandler }) => {
	return (
		<Box
			className="searchContainer"
			sx={{
				bgcolor: "#111827",
				height: "auto",
				width: "70%",
				margin: "auto",
				borderRadius: "10px",
			}}
		>
			<div className="searchBox">
				<p>Search</p>
				<input
					type="text"
					placeholder="Search for anything..."
					value={filter}
					onChange={(e) => filterHandler(e.target.value)}
				/>
			</div>
			<div className="searchBox">
				<p className="sortBy">Sort by:</p>
				<button className="sortClassifieds" onClick={(e) => sortHandler(e.target.textContent)}>
					Price Ascending
				</button>
				<button className="sortClassifieds" onClick={(e) => sortHandler(e.target.textContent)}>
					Price Descending
				</button>
				<button className="sortClassifieds" onClick={(e) => sortHandler(e.target.textContent)}>
					HP Ascending
				</button>
				<button className="sortClassifieds" onClick={(e) => sortHandler(e.target.textContent)}>
					HP Descending
				</button>
				<button className="sortClassifieds" onClick={(e) => sortHandler(e.target.textContent)}>
					Milleage Ascending
				</button>
				<button className="sortClassifieds" onClick={(e) => sortHandler(e.target.textContent)}>
					Milleage Descending
				</button>
			</div>
		</Box>
	);
};

export default SearchClassified;
