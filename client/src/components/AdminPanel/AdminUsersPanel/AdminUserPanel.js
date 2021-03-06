import { useSelector } from "react-redux";
import { userSelector } from "../../../features/auth/authSlice";
import { useState } from "react";
import { Box } from "@mui/material";
import userServices from "../../../services/userServices";
import { Chart } from "../../UserPanel/Chart";

const AdminUsersPanel = ({ users, adminPanelClickHandler, onItemDeleteHandler }) => {
	const [flag, setFlag] = useState(false);
	const loggedUser = JSON.parse(localStorage.getItem("user"));
	const [selectedUser, setSelectedUser] = useState(null);

	const onDeleteButtonClickHandler = (e) => {
		userServices.deleteUser(e.target.id);
		setFlag(!flag);
	};

	const onUserRoleChangeHandler = (e) => {
		const user = users.find((user) => user._id === e.target.id);
		user.role = e.target.value;
		userServices
			.updateUserRole(e.target.id, user)
			.then((res) => {
				setFlag(!flag);
				setSelectedUser(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const chartData = {
		labels: ["Users", "Reviewers", "Admins"],
		datasets: [
			{
				label: "Roles Chart",
				data: [
					users.filter((user) => user.role === "user").length,
					users.filter((user) => user.role === "reviewer").length,
					users.filter((user) => user.role === "admin").length,
				],
				backgroundColor: ["#7582EB", "#8A2BE2", "#FFD700"],
				borderColor: ["#7582EB", "#8A2BE2", "#FFD700"],
				borderWidth: 5,
			},
		],
	};

	return (
		<div className="infoContainers">
			<>
				<div className="myStuff">
					<Box className="adminMainContainer" sx={{ bgcolor: "#111827", minHeight: "50vh", width: "45%" }}>
						<p className="Classifieds">Users</p>
						{users.map((user) => (
							<div className="adminPanelReviewsItemAction" key={user._id}>
								<p
									id={user._id}
									className="adminClassifiedMap userPanelAdmin"
									onClick={adminPanelClickHandler}
								>
									{user.email}
								</p>
								{user.role !== "admin" ? (
									<select
										name="userRoles"
										className="userRoles"
										id={user.id}
										onChange={onUserRoleChangeHandler}
										defaultValue={user.role}
									>
										<option value="user">User</option>
										<option value="reviewer">Reviewer</option>
										<option value="admin">Admin</option>
									</select>
								) : (
									<span className="adminUserRole">admin</span>
								)}
								{user.role !== "admin" ? (
									<img
										id={user._id}
										className="deleteAdminReview"
										src="/images/delete.svg"
										alt="DeleteSvg"
										onClick={onDeleteButtonClickHandler}
									/>
								) : null}
							</div>
						))}
					</Box>

					<Box className="adminMainContainer" sx={{ bgcolor: "#111827", height: "50vh", width: "45%" }}>
						<Chart data={chartData} />
					</Box>
				</div>
			</>
		</div>
	);
};

export default AdminUsersPanel;
