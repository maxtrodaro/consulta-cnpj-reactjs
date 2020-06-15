import React from "react";
import { useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import { HeaderPage } from "./style";
import logoLinx from "../../assets/logo-linx.png";

export default function Header() {
	const history = useHistory();

	const userName = sessionStorage.getItem("name");

	function logoutUsers() {
		sessionStorage.clear();

		history.push("/");
	}

	function homeUsers() {
		if (sessionStorage.getItem("permission") === "project") {
			history.push("/homeproject");
		} else if (sessionStorage.getItem("permission") === "master") {
			history.push("/homemaster");
		} else if (sessionStorage.getItem("permission") === "search") {
			history.push("/homesearch");
		} else if (sessionStorage.getItem("permission") === "cloud") {
			history.push("/homecloud");
		}
	}

	return (
		<HeaderPage>
			<header className="header-container">
				<div className="header-container__left">
					<button onClick={homeUsers}>
						<img src={logoLinx} alt="Linx" title="Linx" />
					</button>
					<p className="header-container__name">
						Olá, <strong>{userName}</strong>
					</p>
				</div>
				<button
					className="header-container__logout"
					type="button"
					onClick={logoutUsers}
				>
					<FiPower size={20} color="#3A0D51" />
					sair
				</button>
			</header>
		</HeaderPage>
	);
}
