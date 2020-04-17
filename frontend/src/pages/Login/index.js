import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
/**
 * Documentation url: https://feathericons.com/
 */
import { FiLogIn } from "react-icons/fi";

import { LoginPage } from "./style";

import api from "../../services/requestAPI";

import logoLinx from "../../assets/logo-linx.svg";
import { Input, Button } from "../../util/Style/global";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	async function loginUsers(e) {
		e.preventDefault();

		try {
			const response = await api.post("/authenticate", { username, password });

			const token = response.data.token;
			sessionStorage.setItem("username", response.data.user[0].username);
			sessionStorage.setItem("name", response.data.user[0].name);

			try {
				await api.get("/token", {
					headers: {
						Authorization: "Bearer " + token,
					},
				});
				history.push("/home");
			} catch (error) {
				throw new Error(error);
			}
		} catch (error) {
			//alert("Falha no login, tente novamente!");
		}
	}

	return (
		<LoginPage>
			<div className="login-container">
				<img src={logoLinx} alt="Linx" />
				<form className="login-container__form" onSubmit={loginUsers}>
					<Input
						placeholder="Usuário:"
						onChange={(e) => setUsername(e.target.value)}
					></Input>
					<p className="login-container__form__user"></p>
					<Input
						placeholder="Senha:"
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
					<p className="login-container__form__password"></p>
					<Button type="submit">Entrar</Button>
					<Link className="login-container__form__link" to="/profile">
						<FiLogIn size={16} color="#696969" style={{ marginRight: "5px" }} />
						Não tenho cadastro
					</Link>
				</form>
			</div>
		</LoginPage>
	);
}
