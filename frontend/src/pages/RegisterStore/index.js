import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../util/Header/header";
import { Input, Button } from "../../global";
import { RegisterPage } from "./style";
import api from "../../services/requestAPI";

export default function RegisterStore() {
	const [name, setName] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [cod_emp, setCodEmp] = useState("");
	const [serv_ip, setServIp] = useState("");

	const history = useHistory();

	async function registerStore(e) {
		e.preventDefault();

		const data = {
			name,
			cnpj,
			cod_emp,
			serv_ip,
		};

		try {
			const response = await api.post("/store", data);

			alert(`${response.data}`);

			history.push("/home");
		} catch (error) {
			alert("Não foi possível cadastrar essa loja, tente novamente!");
		}
	}

	async function registerNewStore(e) {
		e.preventDefault();

		const data = {
			name,
			cnpj,
			cod_emp,
			serv_ip,
		};

		try {
			const response = await api.post("/store", data);

			alert(`${response.data}`);

			window.location.reload(false);
		} catch (error) {
			alert("Não foi possível cadastrar essa loja, tente novamente!");
		}
	}

	return (
		<RegisterPage>
			<Header />
			<section className="register-container">
				<form className="register-container__form" onSubmit={registerStore}>
					<Input
						placeholder="Digite o nome da loja"
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						type="number"
						placeholder="Digite o CNPJ da loja"
						onChange={(e) => setCnpj(e.target.value)}
					/>
					<Input
						type="text"
						placeholder="Digite o código de empresa da loja"
						onChange={(e) => setCodEmp(e.target.value)}
					/>
					<Input
						placeholder="Digite o servidor da loja"
						onChange={(e) => setServIp(e.target.value)}
					/>
					<Button type="submit">Cadastrar loja</Button>
					<Button type="submit" onClick={registerNewStore}>
						Nova loja
					</Button>
				</form>
			</section>
		</RegisterPage>
	);
}
