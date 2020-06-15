import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header/header";
import { RegisterButton } from "../../util/Style/global";
import { DeletePage } from "./style";
import api from "../../services/requestAPI";
import ResetInitialValues from "../../util/ResetsFormik/initialValues";
import RegexServerIp from "../../util/Regex/regexServerIp";

toast.configure();

export default function DeleteStore() {
	const history = useHistory();

	const handleSubmit = async (values) => {
		if (RegexServerIp(values.ip)) {
			try {
				await api.post("/server", values);

				toast.success("Servidor cadastrado com sucesso!", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});

				if (sessionStorage.getItem("permission") === "project") {
					history.push("/homeproject");
				} else if (sessionStorage.getItem("permission") === "master") {
					history.push("/homemaster");
				} else if (sessionStorage.getItem("permission") === "search") {
					history.push("/homesearch");
				} else if (sessionStorage.getItem("permission") === "cloud") {
					history.push("/homecloud");
				}
			} catch (erro) {
				toast.error(erro.response.data.error, {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			}
		} else {
			toast.error("Digite um IP de servidor válido", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	const validations = yup.object().shape({
		name: yup.string().required("Nome obrigatório"),
		ip: yup
			.string()
			.min(8, "O Servidor é no mínimo 8 digítos")
			.max(15, "O Servidor é no máximo 15 digítos")
			.required("Servidor obrigatório"),
	});

	return (
		<DeletePage>
			<Header />
			<section className="delete-container">
				<h2>Cadastrar servidor</h2>
				<Formik
					initialValues={ResetInitialValues}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					{({ dirty, isValid }) => {
						const submitIsValid = !dirty || !isValid;

						return (
							<Form className="delete-container__form">
								<div className="delete-container__form__group">
									<ErrorMessage name="name" component="span" />
									<Field
										name="name"
										placeholder="Nome Servidor:"
										type="text"
										className="delete-container__form__name"
									></Field>
									<p className="delete-container__form__nameIcon"></p>
								</div>
								<div className="delete-container__form__group">
									<ErrorMessage name="server" component="span" />
									<Field
										name="ip"
										placeholder="Ip do Servidor:"
										type="text"
										className="delete-container__form__server"
									></Field>
									<p className="delete-container__form__serverIcon"></p>
								</div>
								<div className="delete-container__form__buttons">
									<RegisterButton type="submit" disabled={submitIsValid}>
										Cadastrar servidor
									</RegisterButton>
									<RegisterButton
										onClick={() => {
											if (sessionStorage.getItem("permission") === "project") {
												history.push("/homeproject");
											} else if (
												sessionStorage.getItem("permission") === "master"
											) {
												history.push("/homemaster");
											} else if (
												sessionStorage.getItem("permission") === "search"
											) {
												history.push("/homesearch");
											} else if (
												sessionStorage.getItem("permission") === "cloud"
											) {
												history.push("/homecloud");
											}
										}}
									>
										Voltar
									</RegisterButton>
								</div>
							</Form>
						);
					}}
				</Formik>
			</section>
			<section className="delete-style"></section>
		</DeletePage>
	);
}
