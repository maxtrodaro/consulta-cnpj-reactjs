import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/header";
import { HomePage } from "./style";
import { HomeButton } from "../../util/Style/global";

import iconRegister from "../../assets/icon-register.svg";
import iconSearch from "../../assets/icon-search.svg";
import iconServer from "../../assets/icon-server.svg";
import iconDeleteServer from "../../assets/icon-server-remove.svg";

export default function Home() {
	return (
		<HomePage>
			<Header />
			<section className="home-container">
				<section className="home-container__buttons">
					<Link to="/register-store" className="home-container__buttons__group">
						<img
							src={iconRegister}
							alt="Imagem do botão Cadastrar Loja"
							title="Cadastrar Loja"
						/>
						<HomeButton type="submit">Cadastrar loja</HomeButton>
					</Link>
					<Link to="/search-store" className="home-container__buttons__group">
						<img
							src={iconSearch}
							alt="Imagem do botão Pesquisar Loja"
							title="Pesquisar Loja"
						/>
						<HomeButton type="submit">Consultar loja</HomeButton>
					</Link>
					<Link
						to="/register-server"
						className="home-container__buttons__group"
					>
						<img
							src={iconServer}
							alt="Imagem do botão Cadastrar Servidor"
							title="Cadastrar Servidor"
						/>
						<HomeButton type="submit">Cadastrar Servidor</HomeButton>
					</Link>
					<Link to="/delete-server" className="home-container__buttons__group">
						<img
							src={iconDeleteServer}
							alt="Imagem do botão Deletar Servidor"
							title="Deletar Servidor"
						/>
						<HomeButton type="submit">Excluir Servidor</HomeButton>
					</Link>
				</section>
				<section className="home-container__style"></section>
				<section className="home-container__style2"></section>
			</section>
		</HomePage>
	);
}
