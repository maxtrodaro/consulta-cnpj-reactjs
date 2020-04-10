import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../../util/Header/header";
import { HomePage } from "./style";
import { HomeButton } from "../../util/Style/global";

export default function Home() {
	const history = useHistory();

	return (
		<HomePage>
			<Header />
			<section className="home-container">
				<HomeButton
					type="submit"
					onClick={() => history.push("/register-store")}
				>
					Cadastrar loja
				</HomeButton>
				<HomeButton type="submit" onClick={() => history.push("/search-store")}>
					Consultar loja
				</HomeButton>
				<HomeButton type="submit" onClick={() => history.push("/edit-store")}>
					Editar loja
				</HomeButton>
				<HomeButton type="submit" onClick={() => history.push("/delete-store")}>
					Excluir loja
				</HomeButton>
			</section>
		</HomePage>
	);
}
