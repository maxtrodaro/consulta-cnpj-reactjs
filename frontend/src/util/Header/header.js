import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import logoLinx from "../../assets/logo-linx.png";
import "./style.css";

export default function Header() {
	const history = useHistory();

	const userName = localStorage.getItem("name");

	function logoutUsers() {
		localStorage.clear();

		history.push("/");
	}

	return (
		<header className="header-container">
			<div className="header-container__left">
				<Link to="/home">
					<img src={logoLinx} alt="Linx" title="Linx" />
				</Link>
				<p className="header-container__name">
					Olá, <strong>{userName}</strong>
				</p>
			</div>
			<button
				className="header-container__logout"
				type="button"
				onClick={logoutUsers}
			>
				<FiPower size={28} color="#ff4427" />
			</button>
		</header>
	);
}
