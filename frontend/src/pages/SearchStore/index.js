import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

import Header from "../../util/Header/header";
import { SearchPage } from "./style";
import { InputSearch, ButtonSearch } from "../../util/Style/global";
import api from "../../services/requestAPI";

export default function SearchStore() {
	const [stores, setStores] = useState([]);

	useEffect(() => {
		const loadStores = async () => {
			const response = await api.get("store");

			setStores(response.data);
		};

		loadStores();
	}, []);

	return (
		<SearchPage>
			<Header />
			<section className="search-container">
				<section className="search-container__top">
					<div className="search-container__top__option">
						<InputSearch
							placeholder="Digite o CNPJ"
							type="number"
						></InputSearch>
						<ButtonSearch>
							<FiSearch color="#48185b" size={20} />
						</ButtonSearch>
					</div>
					<div className="search-container__top__option">
						<InputSearch placeholder="Digite o nome" type="text"></InputSearch>
						<ButtonSearch>
							<FiSearch color="#48185b" size={20} />
						</ButtonSearch>
					</div>
					<div className="search-container__top__option">
						<InputSearch
							placeholder="Digite o servidor"
							type="number"
						></InputSearch>
						<ButtonSearch>
							<FiSearch color="#48185b" size={20} />
						</ButtonSearch>
					</div>
				</section>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
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
								{stores.map((store) => (
									<li
										key={store.id}
										className="search-container__content__bottom__list__item"
									>
										<p className="search-container__content__bottom__list__item__cnpj">
											{store.cnpj}
										</p>
										<p className="search-container__content__bottom__list__item__name">
											{store.name}
										</p>
										<p className="search-container__content__bottom__list__item__cod">
											{store.cod_emp}
										</p>
										<p className="search-container__content__bottom__list__item__serv">
											{store.serv_ip}
										</p>
									</li>
								))}
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
								<li className="search-container__servs__bottom__list__item">
									<p className="search-container__servs__bottom__list__item__name">
										Via Veneto (Brooksfield / Harrys)
									</p>
									<p className="search-container__servs__bottom__list__item__serv">
										10.1.230.4
									</p>
									<p className="search-container__servs__bottom__list__item__qtd">
										110
									</p>
								</li>
								<li className="search-container__servs__bottom__list__item">
									<p className="search-container__servs__bottom__list__item__name">
										Via Veneto (Brooksfield / Harrys)
									</p>
									<p className="search-container__servs__bottom__list__item__serv">
										10.1.230.4
									</p>
									<p className="search-container__servs__bottom__list__item__qtd">
										110
									</p>
								</li>
							</ul>
						</section>
					</section>
				</div>
			</section>
		</SearchPage>
	);
}
