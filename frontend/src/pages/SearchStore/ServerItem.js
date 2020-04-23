import React from "react";

export default function ServerItem({ server }) {
	return (
		<li key={server.id} className="search-container__servs__bottom__list__item">
			<p className="search-container__servs__bottom__list__item__name">
				{server.name}
			</p>
			<p className="search-container__servs__bottom__list__item__serv">
				{server.ip}
			</p>
			<p className="search-container__servs__bottom__list__item__qtd">11</p>
		</li>
	);
}
