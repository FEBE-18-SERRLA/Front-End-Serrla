import React from "react";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { IoIosFolderOpen } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

import { PlaceholderUser } from "../../Assets";

import "./AsideDashboard.css";

const AsideDashboard = () => {
	return (
		<>
			<aside>
				<div className="container">
					<div className="container text-center my-4 container-img-user">
						<img
							src={PlaceholderUser}
							alt="placeholder user"
							className="rounded-circle"
							width="80"
						/>
						<p className="fw-normal pt-3">Nama User</p>
					</div>
					<div className="container my-5">
						<ul className="flex-column text-center p-0">
							<li className="nav-item">
								<NavLink
									to="/dashboard/"
									className={({ isActive }) =>
										isActive
											? "nav-link active-dashboard fw-semibold nav-item-dashboard"
											: "nav-link fw-semibold nav-item-dashboard"
									}
								>
									<ImHome />
									<span className="text-dashboard ps-2">
										Dashboard
									</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/dashboard/modul-saya"
									className={({ isActive }) =>
										isActive
											? "nav-link active-dashboard fw-semibold nav-item-dashboard"
											: "nav-link fw-semibold nav-item-dashboard"
									}
								>
									<IoIosFolderOpen />
									<span className="text-dashboard ps-2">
										Modul Saya
									</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/dashboard/event-favorite"
									className={({ isActive }) =>
										isActive
											? "nav-link active-dashboard fw-semibold nav-item-dashboard"
											: "nav-link fw-semibold nav-item-dashboard"
									}
								>
									<MdFavorite />
									<span className="text-dashboard ps-2">
										Event Favorite
									</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</aside>
		</>
	);
};

export default AsideDashboard;
