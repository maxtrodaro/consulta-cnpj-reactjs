import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header/header";
import { SearchPage } from "./style";
import { InputSearch, ButtonSearch } from "../../util/Style/global";
import api from "../../services/requestAPI";
import StoreItem from "./StoreItem";
import ServerItem from "./ServerItem";
import RegexCnpj from "../../util/Regex/regexCnpj";

async function filterByCnpj(cnpj) {
	try {
		const response = await api.get("/searchStore", {
			headers: {
				CNPJ: cnpj,
			},
		});

		return response.data;
	} catch (erro) {
		throw new Error(alert(erro.response.data.error));
	}
}

toast.configure();

export default function SearchStore() {
	const [stores, setStores] = useState([]);
	const [cnpj, setCnpj] = useState([]);
	const [server, setServer] = useState([]);
	const [filteredStore, setFilteredStore] = useState(null);
	const [counterStore, setCounterStore] = useState([]);
	const [counterServer, setCounterServer] = useState([]);

	useEffect(() => {
		const loadStores = async () => {
			const response = await api.get("store");

			setCounterStore(response.data.count);
			setStores(response.data.rows);
		};

		loadStores();
	}, []);

	useEffect(() => {
		const loadServer = async () => {
			const response = await api.get("server");

			setCounterServer(response.data.count);
			setServer(response.data.rows);
		};

		loadServer();
	}, []);

	async function handleFilter() {
		try {
			const store = await filterByCnpj(cnpj);
			if (store === null) {
				toast.error("CNPJ não encontrado", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			}
			setFilteredStore(store);
		} catch (error) {
			setFilteredStore(null);
		}
	}

	function enterKey(event) {
		if (event.key === "Enter" || event.key === "NumpadEnter") {
			handleFilter();
		}
	}

	const handleChangeCnpj = (e) => {
		const newCnpj = RegexCnpj(e.target.value);
		setCnpj(newCnpj);
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
							type="text"
							onChange={handleChangeCnpj}
							onKeyUp={enterKey}
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
							<section className="search-container__content__items__counter">
								<p>
									Total de CNPJs: <b>{counterStore}</b>
								</p>
							</section>
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
							<span className="search-container__content__items__data">
								Data Criação
							</span>
						</section>
						<section className="search-container__content__bottom">
							<ul className="search-container__content__bottom__list">
								{filteredStore ? (
									<StoreItem store={filteredStore} />
								) : (
										stores.map((store, index) => (
											<StoreItem key={index} store={store} />
										))
									)}
							</ul>
						</section>
					</section>
					<section className="search-container__servs">
						<section className="search-container__servs__items">
							<section className="search-container__servs__items__counter">
								<p>
									Total de Servidores: <b>{counterServer}</b>
								</p>
							</section>
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
								{server.map((server, index) => (
									<ServerItem key={index} server={server} />
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
