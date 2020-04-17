import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

import logoLinx from "../../assets/logo-linx.svg";

import { Input, Button } from "../../util/Style/global";
import { ProfilePage } from "./style";
import api from "../../services/requestAPI";

export default function Register() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	async function registerUsers(e) {
		e.preventDefault();

		const data = {
			name,
			username,
			password,
		};

		try {
			await api.post("/profile", data);

			alert(`Usuário Cadastrado`);

			history.push("/");
		} catch (error) {
			alert("Erro ao cadastrar usuário");
		}
	}

	return (
		<ProfilePage>
			<div className="register-container">
				<form className="register-container__form" onSubmit={registerUsers}>
					<Input
						placeholder="Digite seu nome completo"
						onChange={(e) => setName(e.target.value)}
					/>
					<p className="register-container__form__name"></p>
					<Input
						placeholder="Digite seu usuário"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<p className="register-container__form__user"></p>
					<Input
						placeholder="Digite sua senha"
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
					<p className="register-container__form__pass"></p>
					<Button type="submit">Finalizar Cadastro</Button>
					<Link className="register-container__form__link" to="/">
						<FiArrowLeftCircle
							size={16}
							color="#696969"
							style={{ marginRight: "10px" }}
						/>
						Voltar para o login
					</Link>
				</form>
				<img src={logoLinx} alt="Logo Linx" />
			</div>
		</ProfilePage>
	);
}
