import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

import Header from "../../util/Header/header";
import { RegisterButton } from "../../util/Style/global";
import { RegisterPage } from "./style";
import api from "../../services/requestAPI";

export default function RegisterStore() {
	const [inputError, setInputError] = useState(false);

	const history = useHistory();

	const handleSubmit = async (values) => {
		try {
			const response = await api.post("/store", values);

			alert(`${response.data}`);

			history.push("/home");
		} catch (error) {
			alert("Não foi possível cadastrar essa loja, tente novamente!");
		}
	};

	const validations = yup.object().shape({
		name: yup.string().required("Nome obrigatório"),
		cnpj: yup
			.string()
			.length(14, "O CNPJ são de 14 digítos")
			.required("CNPJ obrigatório"),
		cod_emp: yup
			.string()
			.length(8, "O Código são de 8 digítos")
			.required("Código obrigatório"),
		serv_ip: yup
			.string()
			.min(8, "O Servidor é no mínimo 8 digítos")
			.max(15, "O Servidor é no máximo 15 digítos")
			.required("Servidor obrigatório"),
	});

	return (
		<RegisterPage>
			<Header />
			<section className="register-container">
				<h2>Cadastrar loja</h2>
				<Formik
					initialValues={{}}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					<Form className="register-container__form">
						<div className="register-container__form__left">
							<p className="register-container__form__title">
								Informações da loja
							</p>
							<div className="register-container__form__group">
								<ErrorMessage name="name" component="span" />
								<Field
									name="name"
									placeholder="Nome:"
									type="text"
									className={`register-container__form__left__name ${
										inputError ? "error" : ""
									}`}
								/>
								<p className="register-container__form__left__userIcon"></p>
							</div>
							<div className="register-container__form__group">
								<ErrorMessage name="cnpj" component="span" />
								<Field
									name="cnpj"
									placeholder="CNPJ:"
									type="text"
									className={`register-container__form__left__cnpj ${
										inputError ? "error" : ""
									}`}
								/>
								<p className="register-container__form__left__cnpjIcon"></p>
							</div>
							<div className="register-container__form__group">
								<ErrorMessage name="cod_emp" component="span" />
								<Field
									name="cod_emp"
									placeholder="Código da empresa:"
									type="text"
									className={`register-container__form__left__cod ${
										inputError ? "error" : ""
									}`}
								/>
								<p className="register-container__form__left__codIcon"></p>
							</div>
						</div>
						<div className="register-container__form__right">
							<p className="register-container__form__title">
								Ambiente da loja
							</p>
							<div className="register-container__form__group">
								<ErrorMessage name="serv_ip" component="span" />
								<Field
									name="serv_ip"
									placeholder="Endereço do servidor:"
									type="text"
									className={`register-container__form__right__serv ${
										inputError ? "error" : ""
									}`}
								/>
								<p className="register-container__form__right__servIcon"></p>
							</div>
						</div>
						<div className="register-container__form__buttons">
							<RegisterButton onClick={() => history.push("/home")}>
								Voltar
							</RegisterButton>
							<RegisterButton
								type="submit"
								onClick={() => setInputError(!inputError)}
							>
								Cadastrar loja
							</RegisterButton>
						</div>
					</Form>
				</Formik>
			</section>
			<section className="register-style"></section>
		</RegisterPage>
	);
}
