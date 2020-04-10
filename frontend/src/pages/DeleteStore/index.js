import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Header from "../../util/Header/header";
import { Button, Input } from "../../util/Style/global";
import { DeletePage } from "./style";
import api from "../../services/requestAPI";

export default function DeleteStore() {
	const [cnpj, setCnpj] = useState("");

	const history = useHistory();

	async function deleteStore(e) {
		e.preventDefault();

		try {
			await api.delete(`/store/${cnpj}`);

			alert("Loja deletada com sucesso!");

			history.push("/home");
		} catch (error) {
			alert("Loja não encontrada, tente novamente!");
		}
	}

	return (
		<DeletePage>
			<Header />
			<section className="delete-container">
				<form className="delete-container__form" onSubmit={deleteStore}>
					<Input
						type="number"
						placeholder="Digite o CNPJ da loja"
						onChange={(e) => setCnpj(e.target.value)}
					/>
					<Button type="submit">Deletar loja</Button>
					<Link to="/home">Voltar</Link>
				</form>
			</section>
		</DeletePage>
	);
}
