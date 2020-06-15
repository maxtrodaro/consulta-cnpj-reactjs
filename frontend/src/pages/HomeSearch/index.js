import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/header";
import { HomePage } from "./style";
import { HomeButton } from "../../util/Style/global";

import iconSearch from "../../assets/icon-search.svg";

export default function Home() {
	return (
		<HomePage>
			<Header />
			<section className="home-container">
				<section className="home-container__buttons">
					<Link to="/search-store" className="home-container__buttons__group">
						<img
							src={iconSearch}
							alt="Imagem do botão Pesquisar"
							title="Pesquisar Loja"
						/>
						<HomeButton type="submit">Consultar loja</HomeButton>
					</Link>
				</section>
				<section className="home-container__style"></section>
				<section className="home-container__style2"></section>
			</section>
		</HomePage>
	);
}
