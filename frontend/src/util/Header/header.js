import React from "react";
import { Link, useHistory } from "react-router-dom";
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

	return (
		<HeaderPage>
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
					<FiPower size={20} color="#3A0D51" />
					sair
				</button>
			</header>
		</HeaderPage>
	);
}
