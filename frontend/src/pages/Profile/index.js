import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

import logoLinx from "../../assets/logo-linx.svg";

import api from "../../services/requestAPI";
import "./style.css";

export default function Register() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");

	const history = useHistory();

	async function registerUsers(e) {
		e.preventDefault();

		const data = {
			name,
			username
		};

		try {
			const response = await api.post("/profile", data);

			alert(`${response.data}`);

			history.push("/");
		} catch (error) {
			alert("Erro ao cadastrar usuário");
		}
	}

	return (
		<div className="register-container">
			<form className="register-container__form" onSubmit={registerUsers}>
				<input
					className="input"
					placeholder="Digite seu nome completo"
					onChange={e => setName(e.target.value)}
				/>
				<input
					className="input"
					placeholder="Digite seu usuário"
					onChange={e => setUsername(e.target.value)}
				/>
				<button className="button" type="submit">
					Finalizar Cadastro
				</button>
				<Link className="register-link" to="/">
					<FiArrowLeftCircle
						size={16}
						color="#48185b"
						style={{ marginRight: "10px" }}
					/>
					Voltar para o login
				</Link>
			</form>
			<img src={logoLinx} alt="Logo Linx" />
		</div>
	);
}
