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
		name: yup.string().required(),
		cnpj: yup.string().length(14).required(),
		cod_emp: yup.string().length(8).required(),
		serv_ip: yup.string().min(8).max(15).required(),
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
						<div className="register-container__form__right">
							<p className="register-container__form__title">
								Ambiente da loja
							</p>
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
