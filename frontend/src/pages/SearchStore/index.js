import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

import Header from "../../util/Header/header";
import { SearchPage } from "./style";
import { InputSearch, ButtonSearch } from "../../util/Style/global";
import api from "../../services/requestAPI";
import StoreItem from "./StoreItem";
import ServerItem from "./ServerItem";

async function filterByCnpj(cnpj) {
	try {
		const response = await api.get("/searchStore", {
			headers: {
				CNPJ: cnpj,
			},
		});

		return response.data;
	} catch (error) {
		throw new Error(error);
	}
}

export default function SearchStore() {
	const [stores, setStores] = useState([]);
	const [cnpj, setCnpj] = useState([]);
	const [server, setServer] = useState([]);
	const [filteredStore, setFilteredStore] = useState(null);

	useEffect(() => {
		const loadStores = async () => {
			const response = await api.get("store");

			setStores(response.data);
		};

		loadStores();
	}, []);

	useEffect(() => {
		const loadServer = async () => {
			const response = await api.get("server");

			setServer(response.data);
		};

		loadServer();
	}, []);

	function handleFilter(event) {
		event.preventDefault();

		filterByCnpj(cnpj)
			.then(([store]) => {
				setFilteredStore(store);
			})
			.catch(() => {
				setFilteredStore(null);
			});
	}

	const handleChangeCnpj = (e) => {
		setCnpj(e.target.value);
		setFilteredStore(null);
	};

	return (
		<SearchPage>
			<Header />
			<section className="search-container">
				<section className="search-container__top">
					<div className="search-container__top__option">
						<InputSearch
							placeholder="Digite o CNPJ"
							type="number"
							onChange={handleChangeCnpj}
						></InputSearch>
						<ButtonSearch onClick={handleFilter}>
							<FiSearch color="#FFFFFF" size={20} />
						</ButtonSearch>
					</div>
				</section>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
					}}
				>
					<section className="search-container__content">
						<section className="search-container__content__items">
							<span className="search-container__content__items__cnpj">
								CNPJ
							</span>
							<span className="search-container__content__items__name">
								Nome da Loja
							</span>
							<span className="search-container__content__items__cod">
								Cód. Emp
							</span>
							<span className="search-container__content__items__serv">
								IP Servidor
							</span>
						</section>
						<section className="search-container__content__bottom">
							<ul className="search-container__content__bottom__list">
								{filteredStore ? (
									<StoreItem store={filteredStore} />
								) : (
									stores.map((store) => <StoreItem store={store} />)
								)}
							</ul>
						</section>
					</section>
					<section className="search-container__servs">
						<section className="search-container__servs__items">
							<span className="search-container__servs__items__name">
								Nome do Servidor
							</span>
							<span className="search-container__servs__items__serv">
								Servidor
							</span>
							<span className="search-container__servs__items__qtd">
								QTD. CNPJs
							</span>
						</section>
						<section className="search-container__servs__bottom">
							<ul className="search-container__servs__bottom__list">
								{server.map((server) => (
									<ServerItem server={server} />
								))}
							</ul>
						</section>
					</section>
				</div>
			</section>
			<section className="search-style"></section>
		</SearchPage>
	);
}
