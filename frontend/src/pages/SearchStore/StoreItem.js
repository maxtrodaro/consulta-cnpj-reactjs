import React from "react";
import RegexFormatedData from "../../util/Regex/regexData";

export default function StoreItem({ store }) {
	return (
		<li className="search-container__content__bottom__list__item">
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
			<p className="search-container__content__bottom__list__item__data">
				{RegexFormatedData(store.createdAt)}
			</p>
		</li>
	);
}
