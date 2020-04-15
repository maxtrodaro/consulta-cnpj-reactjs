import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Header from "../../util/Header/header";
import { Input, Button } from "../../util/Style/global";
import { EditPage } from "./style";
import api from "../../services/requestAPI";

export default function EditStore() {
	const [name, setName] = useState("");
	const [cnpj, setCnpj] = useState("");
	const [cod_emp, setCodEmp] = useState("");
	const [serv_ip, setServIp] = useState("");

	const history = useHistory();

	async function editStore(e) {
		e.preventDefault();

		const data = {
			name,
			cnpj,
			cod_emp,
			serv_ip,
		};

		try {
			await api.put(`/store/${cnpj}`, data);

			alert("Loja alterada com sucesso!");

			history.push("/home");
		} catch (error) {
			throw new Error(error);
		}
	}

	return (
		<EditPage>
			<Header />
			<section className="edit-container">
				<form className="edit-container__form">
					<Input
						placeholder="Digite o nome da loja"
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						placeholder="Digite o CNPJ da loja"
						onChange={(e) => setCnpj(e.target.value)}
					/>
					<Input
						placeholder="Digite o código de empresa da loja"
						onChange={(e) => setCodEmp(e.target.value)}
					/>
					<Input
						placeholder="Digite o servidor da loja"
						onChange={(e) => setServIp(e.target.value)}
					/>
					<Button type="submit" onClick={editStore}>
						Editar loja
					</Button>
					<Link to="/home">Voltar</Link>
				</form>
			</section>
		</EditPage>
	);
}
