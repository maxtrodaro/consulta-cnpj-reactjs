import React, { useState, useEffect } from "react";

import api from "../../services/requestAPI";

export default function ServerItem({ server }) {
	const [qtd, setQtd] = useState([]);

	useEffect(() => {
		const loadQtdStores = async (ip) => {
			const response = await api.get(`/store/${ip}`);

			setQtd(response.data.count);
		};

		loadQtdStores(server.ip);
	}, [server]);

	return (
		<li className="search-container__servs__bottom__list__item">
			<p className="search-container__servs__bottom__list__item__name">
				{server.name}
			</p>
			<p className="search-container__servs__bottom__list__item__serv">
				{server.ip}
			</p>
			<p className="search-container__servs__bottom__list__item__qtd">{qtd}</p>
		</li>
	);
}
