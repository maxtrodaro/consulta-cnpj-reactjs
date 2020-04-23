import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

import Header from "../../util/Header/header";
import { RegisterButton } from "../../util/Style/global";
import { DeletePage } from "./style";
import api from "../../services/requestAPI";

export default function DeleteStore() {
	const history = useHistory();

	const handleSubmit = async (values) => {
		try {
			await api.delete(`/store/${values.cnpj}`);

			alert("Loja deletada com sucesso!");

			history.push("/home");
		} catch (error) {
			alert("Loja não encontrada, tente novamente!");
		}
	};

	const validations = yup.object().shape({
		cnpj: yup
			.string()
			.length(14, "O CNPJ são de 14 digítos")
			.required("CNPJ obrigatório"),
	});

	return (
		<DeletePage>
			<Header />
			<section className="delete-container">
				<h2>Excluir loja</h2>
				<Formik
					initialValues={{}}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					<Form className="delete-container__form">
						<div className="delete-container__form__group">
							<ErrorMessage name="cnpj" component="span" />
							<Field
								name="cnpj"
								placeholder="CNPJ:"
								type="text"
								className="delete-container__form__cnpj"
							></Field>
							<p className="delete-container__form__cnpjIcon"></p>
						</div>
						<div className="delete-container__form__buttons">
							<RegisterButton onClick={() => history.push("/home")}>
								Voltar
							</RegisterButton>
							<RegisterButton type="submit">Excluir loja</RegisterButton>
						</div>
					</Form>
				</Formik>
			</section>
			<section className="delete-style"></section>
		</DeletePage>
	);
}
